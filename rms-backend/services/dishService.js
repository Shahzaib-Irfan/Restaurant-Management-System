const Dish = require("../models/dish");

class DishService {
  static async createDish(dishData) {
    try {
      const newDish = new Dish(dishData);
      const savedDish = await newDish.save();
      return savedDish;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = DishService;
