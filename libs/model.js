const config = require('config');
const debug = require('debug')('discovery-model');
const DB = config.db.name;
const thinky = require('thinky')({
  host: config.db.host, 
  port: config.db.port, 
  max: 25,
  buffer: 5,
  db: DB
});


const InflightAccountRepository = require('./inflightAccountRepository').InflightAccountRepository;
const TicketRepository = require('./ticketRepository').TicketRepository;
const EnrouteRecordingRepository = require('./enrouteRecordingRepository').EnrouteRecordingRepository;
const inflightAccountRepositoryInstance = new InflightAccountRepository(thinky);
const ticketRepositoryInstance = new TicketRepository(thinky);
const enrouteRecordingRepositoryInstance = new EnrouteRecordingRepository(thinky);


module.exports.inflightAccountRepository = inflightAccountRepositoryInstance;
module.exports.ticketRepository = ticketRepositoryInstance;
module.exports.enrouteRecordingRepository = enrouteRecordingRepositoryInstance;