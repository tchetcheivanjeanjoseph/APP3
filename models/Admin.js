const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const options  = {
    type : String
};

const AdminSchema = new Schema ({
    last_name: options,
    first_name: options,

    avatar : options,
    email : options,
    num : options,
    password : options,

    online : options,
    created_at: options,
    updated_at : options
});

module.exports = mongoose.model('Admin', AdminSchema);