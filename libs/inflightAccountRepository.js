'use strict';
const Promise = require('promise').Promise;

class InflightAccountRepository {
	constructor(InflightAccount) {
		this.InflightAccount = InflightAccount;
	}

	save(account) {
		let p = new Promise((resolve, reject) => {
			resolve(account);
		});
		return p;
	}

	update(account) {
		let p = new Promise((resolve, reject) => {
			resolve(account);
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