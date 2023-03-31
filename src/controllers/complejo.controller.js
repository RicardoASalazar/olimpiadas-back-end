const ComplejoServices = require("../services/complejo.service");

const filter = async (req, res, next) => {
  try {
    const { filter } = req.params;
    const result = await ComplejoServices.filter(filter);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getByCve = async (req, res, next) => {
  try {
    const { cve: id } = req.params;
    const result = await ComplejoServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await ComplejoServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const registerCom = async (req, res, next) => {
  try {
    const data = req.body;
    result = await ComplejoServices.register(data);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateCom = async (req, res, next) => {
  try {
    const { com_area, com_descripcion, com_jefe, com_localizacion, cve } =
      req.body;
    const data = { com_area, com_descripcion, com_jefe, com_localizacion, cve };
    const result = await ComplejoServices.updateComplejo(data);
    console.log(result);
    res.status(200).json(result)
  } catch (error) {
    next(error);
  }
};

const deleteComplejo = async(req,res,next)=>{
  try {
    const {cve} = req.params
    console.log(cve);
    const result = await ComplejoServices.deleteComplejo(cve)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  filter,
  getByCve,
  getAll,
  registerCom,
  updateCom,
  deleteComplejo
};
