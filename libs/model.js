'use strict';
const Promise = require('promise');
const mongoose = require('mongoose');
const mPage = require('mongoose-paginate');
mongoose.plugin(require('meanie-mongoose-to-json'));

const oldMpage = mPage.paginate;

mPage.paginate = (query, options) => {
  return oldMpage(query, options).then((results) => {
    if (results.docs) {
      results.elements = results.docs;
      delete results.docs;
    }

    return results;
  });
};

mongoose.plugin(mPage);

const InflightAccountRepository = require('./inflightAccountRepository').InflightAccountRepository;
const GeoRecordingRepository = require('./geoRecordingRepository').GeoRecordingRepository;
const GeoFenceRepository = require('./geoFenceRepository').GeoFenceRepository;
const TicketRepository = require('./ticketRepository').TicketRepository;

class ModelFactory {

  constructor() {

  }

  createModels(connection) {
    let InflightAccount = connection.model('InflightAccount', mongoose.Schema({
      firstName: String,
      lastName: String,
      onBehalfOfTitle: String,
      onBehalfOfLogoUrl: String,
      avatarUrl: String,
      timestamp: String,
      ttl: Number,
    }));

    let Ticket = connection.model('Ticket', mongoose.Schema({
      ttl: Number,
      accountId: String,
    }));

    let GeoRecording = connection.model('GeoRecording', mongoose.Schema({
      heading: Number,
      coordinates: [Number],
      speed: Number,
      ticketId: String,
    }));

    let GeoFence = connection.model('GeoFence', mongoose.Schema({
      coordinates: [[Number]],
      ticketId: String,
      callbackUrl: String,
    }));

    InflightAccount.repo = new InflightAccountRepository(InflightAccount);
    Ticket.repo = new TicketRepository(Ticket);
    GeoRecording.repo = new GeoRecordingRepository(GeoRecording);
    GeoFence.repo = new GeoFenceRepository(GeoFence);

    return {
      InflightAccount: InflightAccount,
      Ticket: Ticket,
      GeoRecording: GeoRecording,
      GeoFence: GeoFence,
    };
  }
}

const createModelFactory = () => {
  return new ModelFactory();
};

exports.createModelFactory = createModelFactory;
