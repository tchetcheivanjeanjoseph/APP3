const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const options  = {
    type : String
};

const UserSchema = new Schema ({
    last_name: options,
    first_name: options,
    promo : options,
    filliere : options,
    avatar : options,
    email : options,
    num : options,
    password : options,
    matricule : options,
    in_city : options,
    chambre : options, 
    online : options,
    created_at: options,
    updated_at : options
});

module.exports = mongoose.model('User', UserSchema);