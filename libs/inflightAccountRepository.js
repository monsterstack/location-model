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

	update(account) {
		let _this = this;
		return _this.InflightAccount.update({ _id: mongoose.Types.ObjectId(account._id) }, account).then((mods) => {
			return account;
		});
	}

	findById(id) {
		let _this = this;
		return _this.InflightAccount.findOne({ _id: mongoose.Types.ObjectId(id) }).exec();
	}
}

module.exports.InflightAccountRepository = InflightAccountRepository;