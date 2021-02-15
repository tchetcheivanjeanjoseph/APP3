var compteModel = require('../models/Compte');
var mealModel = require('../models/Meal');

class Compte {

    async Debit(data) {
        let time_now = new Date().getHours();
        
        let credital_sum = 0;
        if (time_now >= 16 && time_now < 19) {
            credital_sum = 100;
            let meal_detail = {
                author: data.author,
                somme: credital_sum,
                time_created: new Date().getHours(),
                created_at: new Date().toLocaleDateString(),
                updated_at: ''
            };
            let actual_sum = Number(data.somme);
            if (data.somme > 0) {
                let new_sum = actual_sum - credital_sum;
                let string_new_sum = new_sum.toString();
                const compteUpdating = await compteModel.findByIdAndUpdate({ _id: data._id, }, { somme: string_new_sum });
                const mealSaved = new mealModel(meal_detail);
                await mealSaved.save();
                if (compteUpdating) {
                    return compteUpdating;
                } else {
                    return 1;
                }
            } else {
                return 0;
            }
            
        } else if (time_now >= 18 && time_now < 21) {
            credital_sum = 200;
            let meal_detail = {
                author: data.author,
                somme: credital_sum,
                created_at: new Date().toLocaleDateString(),
                updated_at: ''
            };
            let actual_sum = Number(data.somme);
            if (data.somme > 0) {
                let new_sum = actual_sum - credital_sum;
                let string_new_sum = new_sum.toString();
                const compteUpdating = await compteModel.findByIdAndUpdate({ _id: data._id, }, { somme: string_new_sum });
                const mealSaved = new mealModel(meal_detail);
                await mealSaved.save();
                if (compteUpdating) {
                    return compteUpdating;
                } else {
                    return 1;
                }
            } else {
                return 0;
            }
        } else {
            return 2;
        }

        console.log('jai fini');
    }
}


module.exports = Compte;