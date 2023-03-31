const { sede } = require("../models");

class sedeServices {
  static async getSedes() {
    try {
      const result = await sede.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = sedeServices;
