'use strict';
const Promise = require('promise');
const mongoose = require('mongoose');
mongoose.plugin(require('meanie-mongoose-to-json'));
mongoose.plugin(require('mongoose-paginate'));

const InflightAccountRepository = require('./inflightAccountRepository').InflightAccountRepository;
const GeoRecordingRepository = require('./geoRecordingRepository').GeoRecordingRepository;
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

    InflightAccount.repo = new InflightAccountRepository(InflightAccount);
    Ticket.repo = new TicketRepository(Ticket);
    GeoRecording.repo = new GeoRecordingRepository(GeoRecording);

    return {
      InflightAccount: InflightAccount,
      Ticket: Ticket,
      GeoRecording: GeoRecording,
    };
  }
}

const createModelFactory = () => {
  return new ModelFactory();
};

exports.createModelFactory = createModelFactory;
