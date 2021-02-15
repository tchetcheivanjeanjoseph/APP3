const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const options  = {
    type : String
};

const CompteSchema = new Schema ({
    author: options,
    
    somme: options,

    created_at: options,
    updated_at : options
});

module.exports = mongoose.model('Compte', CompteSchema);