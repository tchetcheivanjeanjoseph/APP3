const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const options  = {
    type : String
};

const MedicalSchema = new Schema ({
    author: options,
    weight : options,
    height: options,

    description: options,

    created_at: options,
    updated_at : options
});

module.exports = mongoose.model('Medical', MedicalSchema);