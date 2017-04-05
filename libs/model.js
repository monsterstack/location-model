'use strict';

class ModelFactory {

  createModels(connection) {
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

const createModelFactory = () => {
  return new ModelFactory();
};

exports.createModelFactory = createModelFactory;