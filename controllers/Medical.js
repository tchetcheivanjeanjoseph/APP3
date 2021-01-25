var medicalModel = require('../models/Medical');


class Medical {

    async setMedical(data) {

        const med = new medicalModel(data);

        const medSaved = await med.save();

        if (medSaved) {

            return medSaved;

        } else {

            return false;

        }
    }

    async getMedical() {

        const med = await medicalModel.find();

        if (med.length > 0) {

            return med;

        } else {

            return 0;
            
        }
    }
}

module.exports = Medical;