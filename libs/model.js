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
const inflightAccountRepositoryInstance = new InflightAccountRepository(thinky);
const ticketRepositoryInstance = new TicketRepository(thinky);


module.exports.inflightAccountRepository = inflightAccountRepositoryInstance;
module.exports.ticketRepository = ticketRepositoryInstance;