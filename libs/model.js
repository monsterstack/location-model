'use strict';
const mongoose = require('mongoose');
const InflightAccountRepository = require('./inflightAccountRepository').InflightAccountRepository;

class ModelFactory {

  createModels(connection) {
    let InflightAccount = connection.model('InflightAccount', mongoose.Schema({
      name: String,
    }));

	  // Decorate with Repository
	  InflightAccount.repo = new InflightAccountRepository(InflightAccount);

    return {
      InflightAccount: InflightAccount
    };
  }
}

const createModelFactory = () => {
  return new ModelFactory();
};

exports.createModelFactory = createModelFactory;