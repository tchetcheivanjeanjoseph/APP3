var mealModel = require('../models/Meal');

class Meal {

    async getAllMeal() {
        const meal = await mealModel.find();
        return meal;
    }

    async getMealMorning() {
        const meal = await mealModel.find({ somme: '100' });
        return meal;
    }

    async getMealNight() {
        const meal = await mealModel.find({ somme: '200' });
        return meal;
    }
}

module.exports = Meal;