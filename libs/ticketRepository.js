'use strict';
const Promise = require('promise');
const Repository = require('./repository').Repository;
const mongoose = require('mongoose');

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

  update(ticketId, ticket) {
    let _this = this;
    return _this.Ticket.findByIdAndUpdate(ticketId, ticket);
  }

  findById(id) {
    let _this = this;
    return _this.Ticket.findOne({ _id: mongoose.Types.ObjectId(id) }).exec();
  }

  findByAccountId(id) {
    let _this = this;
    return _this.Ticket.findOne({ accountId: id }).exec();
  }

  page(query, page, limit) {
    let _this = this;
    return _this.Ticket.paginate(query, { page: page, limit: limit });
  }
}

module.exports.TicketRepository = TicketRepository;
