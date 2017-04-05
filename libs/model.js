'use strict';

class ModelFactory {
  constructor(connection) {
    this.connection = connection;
  }

  createModels() {
    let InflightAccount = connection.model('InflightAccount', mongoose.Schema({
      name: String,
    }));

	  // Decorate with Repository
	  InflightAccount.repo = new InflightRepository(InflightAccount);

    return {
      InflightAccount: InflightAccount
    };
  }
}

const InflightAccountRepository = require('./inflightAccountRepository').InflightAccountRepository;

const createModelFactory = (connection) => {
  return new ModelFactory(connection);
};

exports.createModelFactory = createModelFactory;