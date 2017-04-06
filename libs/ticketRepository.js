'use strict';
const Promise = require('promise');
const Repository = require('./repository').Repository;

class TicketRepository extends Repository {
	constructor(Ticket) {
		super();
		this.Ticket = Ticket;
	}

	save(ticket) {
		let _this = this;
		let tck = new _this.Ticket(ticket);
		return tck.save();
	}

	update(ticket) {
		let _this = this;
		return _this.Ticket.update({ _id: ticket._id }, ticket);
	}

	findById(id) {
		let _this = this;
		return _this.Ticket.findOne({ _id: mongoose.Types.ObjectId(id) }).exec();
	}

	findByAccountId(id) {
		let _this = this;
		return _this.Ticket.findOne({ accountId: id }).exec();
	}
}

module.exports.TicketRepository = TicketRepository;