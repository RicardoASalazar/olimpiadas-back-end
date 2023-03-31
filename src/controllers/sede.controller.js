const sedeServices = require("../services/sede.service");

const getSedes = async (req, res, next) => {
  try {
    const result = await sedeServices.getSedes();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSedes,
};
