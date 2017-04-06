'use strict';
const Promise = require('promise');

class TicketRepository {
	constructor(Ticket) {
		this.Ticket = Ticket;
	}

	save(ticket) {
		let _this = this;
		let p = new Promise((resolve, reject) => {
			let tck = new _this.Ticket(ticket);
			tck.save(ticket, (err, doc) => {
				if(err) reject(err);
				else
					resolve(doc);
			});
		});
		return p;
	}

	update(ticket) {
		let _this = this;
		let p = new Promise((resolve, reject) => {
			let tck = new _this.Ticket(ticket);
			tck.update({_id: ticket._id}, ticket, (err, doc) => {
				if(err) reject(err);
				else
					resolve(doc);
			});
		});
		return p;
	}

	findById(id) {
		let p = new Promise((resolve, reject) => {
			_this.Ticket.findOne({ _id: ObjectId(id) }).then((doc) => {
				resolve(doc);
			}).catch((err) => {
				reject(err);
			});
		});
		return p;
	}

	findByAccountId(id) {
		let p = new Promise((resolve, reject) => {
			_this.Ticket.findOne({ accountId: id }).then((docs) => {
				resolve(docs);
			}).catch((err) => {
				reject(err);
			});
		});
		return p;
	}
}

module.exports.InflightAccountRepository = InflightAccountRepository;