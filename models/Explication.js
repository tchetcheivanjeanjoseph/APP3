const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const options  = {
    type : String
};

const ExplicationSchema = new Schema ({
    author: options,
    
    message: options,
    status: { type: Number },
    created_at: options,
    updated_at : options
});

module.exports = mongoose.model('Explication', ExplicationSchema);