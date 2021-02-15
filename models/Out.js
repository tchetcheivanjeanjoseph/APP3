const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const options  = {
    type : String
};

const OutSchema = new Schema ({
    author: options,
    bed_number : options,
    date_started : options,
    date_finish: options,
    motivation: options,
    number_tutor: options,
    status: options,
    created_at: options,
    updated_at : options
});

module.exports = mongoose.model('Out', OutSchema);