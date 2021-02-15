var ExplicationModel = require('../models/Explication');

class Explication {

    async send(data) {

        const explication = new ExplicationModel(data);

        const explicationSaved = await explication.save();

        if (explicationSaved) {
            return explicationSaved;
        } else {
            return false;
        }

    }

    async receive(id) {
        const explication = await ExplicationModel.find({ _id: id, status: 0 });
        return explication;
    }

    async receive_all(id) {
        const explication = await ExplicationModel.find({ _id: id });
        return explication;
    }
}

module.exports = Explication;