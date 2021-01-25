const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const options  = {
    type : String
};

const CreditSchema = new schema ({
    author: options,
    choice : options,
    paypal: options,

    num : options,
    somme: options,

    created_at: options,
    updated_at : options
});

module.exports = mongoose.model('Credit', CreditSchema);