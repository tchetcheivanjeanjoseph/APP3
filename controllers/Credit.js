var creditModel = require('../models/Credit');


class Credit {

    async setCredit(data) {

        const credit = new creditModel(data);

        const creditSaved = await credit.save();

        if (creditSaved) {
            return creditSaved;
        } else {
            return false;
        }
    }


    async getCredit() {

        const credit = await creditModel.find();

        if (credit.length > 0) {
            
            return credit;

        } else {
            
            return 0;
        }
    }
}

module.exports = Credit;