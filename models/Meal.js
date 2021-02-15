const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const options  = {
    type : String
};

const MealSchema = new Schema ({
    author: options,
    
    somme: options,
    time_created: options,
    created_at: options,
    updated_at : options
});

module.exports = mongoose.model('Meal', MealSchema);