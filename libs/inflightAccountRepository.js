'use strict';
const Promise = require('promise');

class InflightAccountRepository {
	constructor(InflightAccount) {
		this.InflightAccount = InflightAccount;
	}

	save(account) {
		let _this = this;
		let p = new Promise((resolve, reject) => {
			let acct = new _this.InflightAccount(account);
			acct.save(account, (err, doc) => {
				if(err) reject(err);
				else
					resolve(doc);
			});
		});
		return p;
	}

	update(account) {
		let _this = this;
		let p = new Promise((resolve, reject) => {
			_this.InflightAccount.update(account, (err, doc) => {
				if(err) reject(err);
				else
					resolve(doc);
			});
		});
		return p;
	}

	findById(id) {
		let p = new Promise((resolve, reject) => {
			_this.InflightAccount.findOne({ _id: ObjectId(id) }).then((doc) => {
				resolve(doc);
			}).catch((err) => {
				reject(err);
			});
		});
		return p;
	}
}

module.exports.InflightAccountRepository = InflightAccountRepository;