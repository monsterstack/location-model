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
    return _this.InflightAccount.findByIdAndUpdate(accountId, account);
  }

  findById(id) {
    let _this = this;
    return _this.InflightAccount.findOne({ _id: mongoose.Types.ObjectId(id) }).exec();
  }

  page(query, page, limit) {
    let _this = this;
    return _this.InflightAccount.paginate(query, { page: page, limit: limit });
  }
}

module.exports.InflightAccountRepository = InflightAccountRepository;
