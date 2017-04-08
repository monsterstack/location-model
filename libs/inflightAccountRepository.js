'use strict';
const Promise = require('promise');
const Repository = require('./repository').Repository;
const mongoose = require('mongoose');

class InflightAccountRepository extends Repository {
  constructor(InflightAccount) {
    super();
    this.InflightAccount = InflightAccount;
  }

  save(account) {
    let _this = this;
    let acct = new _this.InflightAccount(account);
    return acct.save(acct);
  }

  update(accountId, account) {
    let _this = this;
    return _this.InflightAccount.findByIdAndUpdate(accountId, account).then((updatedAccount) => {
      return updatedAccount;
    });
  }

  findById(id) {
    let _this = this;
    return _this.InflightAccount.findOne({ _id: mongoose.Types.ObjectId(id) }).exec();
  }
}

module.exports.InflightAccountRepository = InflightAccountRepository;
