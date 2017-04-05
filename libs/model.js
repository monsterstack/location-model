'use strict';
const InflightAccountRepository = require('./inflightAccountRepository').InflightAccountRepository;

const createModelFactory = (connection) => {
  let InflightAccount = connection.model('InflightAccount', mongoose.Schema({
    name: String,
  }));

	// Decorate with Repository
	InflightAccount.repo = new InflightRepository(InflightAccount);

  return {
    InflightAccount: InflightAccount
   };
};

exports.createModelFactory = createModelFactory;