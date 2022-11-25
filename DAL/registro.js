const { Franela, Producto, User } = require("../models");
const { Op } = require("sequelize");

const franelaData = async (limit, offset) => {
  return await Franela.findAndCountAll({
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
    where: {
      deletedAt: {
        [Op.not]: null,
      },
    },
    limit: limit,
    offset: offset,
    paranoid: false,
  });
};

module.exports = {
  franelaData,
};
