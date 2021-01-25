const OutModel = require('../models/Out');

class Request {

    async OutRequest(data) {
        const out = new OutModel(data);

        const outSaved = await out.save();

        if (outSaved) {
            return outSaved;
        } else {
            return false;
        }
    }

    
}

module.exports = Request;