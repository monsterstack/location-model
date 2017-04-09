'use strict';
const mongoose = require('mongoose');
const InflightAccountRepository = require('./inflightAccountRepository').InflightAccountRepository;
const GeoRecordingRepository = require('./geoRecordingRepository').GeoRecordingRepository;
const TicketRepository = require('./ticketRepository').TicketRepository;
class ModelFactory {

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
    };
  }
}

const createModelFactory = () => {
  return new ModelFactory();
};

exports.createModelFactory = createModelFactory;
