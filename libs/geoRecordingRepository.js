'use strict';
const Promise = require('promise');
const Repository = require('./repository').Repository;
const mongoose = require('mongoose');

class GeoRecordingRepository extends Repository {
  constructor(GeoRecording) {
    super();
    this.GeoRecording = GeoRecording;
  }

  save(geoRecording) {
    let _this = this;
    let geo = new _this.GeoRecording(geoRecording);
    return geo.save();
  }

  update(geoRecordingId, geoRecording) {
    let _this = this;
    return _this.GeoRecording.findByIdAndUpdate(geoRecordingId, geoRecording);
  }

  findById(id) {
    let _this = this;
    return _this.GeoRecording.findOne({ _id: mongoose.Types.ObjectId(id) }).exec();
  }

  findByTicketId(id) {
    let _this = this;
    return _this.GeoRecording.findOne({ ticketId: id }).exec();
  }

  page(query, limit, offset) {
    let _this = this;
    return _this.GeoRecording.paginate(query, { offset: offset, limit: limit });
  }
}

module.exports.GeoRecordingRepository = GeoRecordingRepository;
