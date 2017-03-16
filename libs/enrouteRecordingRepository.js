'use strict';

class EnrouteRecordingRepository {
    constructor(thinky) {
        this.thinky = thinky;
        this.r = thinky.r;
        this.EnrouteRecording = thinky.createModel('EnrouteRecording', {
            id: type.string(),
            geoPosition: [type.number()],
            heading: type.number(),
            speed: type.number(),
            timestamp: type.date().default(this.r.now()),
            ticketId: type.string()
        });
    }

    save(enrouteRecording) {
        return this.EnrouteRecording.save(enrouteRecording);
    }
}

module.exports.EnrouteRecordingRepository = EnrouteRecordingRepository;