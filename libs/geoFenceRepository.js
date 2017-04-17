'use strict';
const Promise = require('promise');
const Repository = require('./repository').Repository;
const mongoose = require('mongoose');

class GeoFenceRepository extends Repository {
  constructor(GeoFence) {
    super();
    this.GeoFence = GeoFence;
  }

  save(geoFence) {
    let _this = this;
    let geo = new _this.GeoFence(geoFence);
    return geo.save();
  }

  update(geoFenceId, geoFence) {
    let _this = this;
    return _this.GeoFence.findByIdAndUpdate(geoFenceId, geoFence);
  }

  findById(id) {
    let _this = this;
    return _this.GeoFence.findOne({ _id: mongoose.Types.ObjectId(id) }).exec();
  }

  findByAccountId(id) {
    let _this = this;
    return _this.GeoFence.findOne({ accountId: id }).exec();
  }

  page(query, limit, offset) {
    let _this = this;
    return _this.GeoFence.paginate(query, { offset: offset, limit: limit });
  }
}

module.exports.GeoFenceRepository = GeoFenceRepository;
