'use strict';

class TicketRepository {
    constructor(thinky) {
        this.r = thinky.r;
        let type = thinky.type;
        this.Ticket = thinky.createModel('Ticket', {
            id: type.string(),
            inflightAccountId: type.string(),
            timestamp: type.date().default(this.r.now()),
            ttl: type.number(),
            destination: {
                street: type.string(),
                city: type.string(),
                state: type.string(),
                postalCode: type.string(),
                countryCode: type.string()
            }
        });
    }


    save(ticket) {
        return this.Ticket.save(ticket);
    }

    getById(ticketId) {
        return this.Ticket.get(ticketId);
    }

    deleteById(ticketId) {
        return this.Ticket.get(ticketId).then((ticket) => {
            return ticket.delete();
        });
    }

    delete(ticket) {
        return this.Ticket.get(ticket.id).then((myTicket) => {
            return myTicket.delete();
        });
    }

    update(ticket) {
        return this.Ticket.get(ticket.id).then((myTicket) => {
            return myTicket.merge(ticket);
        });
    }


}

module.exports.TicketRepository = TicketRepository;