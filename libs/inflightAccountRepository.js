'use strict';

class InflightAccountRepository {
    constructor(thinky) {
        this.r = thinky.r;
        this.InflightAccount = thinky.createModel('InflightAccount', {
            id: type.string(),
            firstName: type.string(),
            lastName: type.string(),
            onBehalfOfTitle: type.string(),
            onBehalfOfLogoUrl: type.string(),
            avatarUrl: type.string(),
            timestamp: type.date().default(r.now()),
            ttl: type.number()
        });
    }

    save(inflightAccount) {
        return this.InflightAccount.save(inflightAccount);
    }

    update(inflightAccount) {
        return this.InflightAccount.get(inflightAccount.id).then((account) => {
            return account.merge(inflightAccount);
        });
    }

    getById(id) {
        return this.InflightAccount.get(id);
    }

    deleteById(id) {
        return this.InflightAccount.get(id).then((account) => {
            return account.delete();
        });
    }

    delete(inflightAccount) {
        return this.InflightAccount.get(inflightAccount.id).then((account) => {
            return account.delete();
        });
    }
}

module.exports.InflightAccountRepository = InflightAccountRepository;