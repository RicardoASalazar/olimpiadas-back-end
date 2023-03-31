const { complejo, sede } = require("../models");
const { Op } = require("@sequelize/core");

class ComplejoServices {
  static async filter(filter) {
    try {
      const result = await complejo.findAll({
        where: {
          [Op.or]: [
            {
              com_descripcion: {
                [Op.like]: `%${filter}%`,
              },
            },
            {
              com_jefe: {
                [Op.like]: `%${filter}%`,
              },
            },
            {
              com_localizacion: {
                [Op.like]: `%${filter}%`,
              },
            },
            {
              com_area: {
                [Op.like]: `%${filter}%`,
              },
            },
          ],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await complejo.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAll() {
    try {
      const result = await complejo.findAll({
        include: {
          model: sede,
          as: "sed_cve_sede_sede",
          attributes: ["sed_cve_sede", "sed_nombre"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async register(data) {
    try {
      const result = await complejo.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateComplejo(data) {
    try {
      const { com_area, com_descripcion, com_jefe, com_localizacion, cve } =
        data;
      const result = await complejo.update(
        { com_area, com_descripcion, com_jefe, com_localizacion },
        { where: { com_cve_complejo: cve } }
      );

      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteComplejo(cve){
    try {
      const result = await complejo.destroy({where:{com_cve_complejo:cve}})
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = ComplejoServices;
