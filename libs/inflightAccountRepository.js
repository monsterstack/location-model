'use strict';
const Promise = require('promise');

class InflightAccountRepository {
	constructor(InflightAccount) {
		this.InflightAccount = InflightAccount;
	}

	save(account) {
		let _this = this;
		let p = new Promise((resolve, reject) => {
			_this.InflightAccount.save(account, (err, doc) => {
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
			resolve({});
		});
		return p;
	}
}

module.exports.InflightAccountRepository = InflightAccountRepository;