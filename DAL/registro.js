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

const franelaRestore = async (id) => {
  await Franela.restore({
    where: {
      id: id,
    },
  });
};

const productoData = async (limit, offset) => {
  return await Producto.findAndCountAll({
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

const productoRestore = async (id) => {
  await Producto.restore({
    where: {
      id: id,
    },
  });
};

const usuarioData = async (limit, offset) => {
  return await User.findAndCountAll({
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

const usuarioRestore = async (id) => {
  await User.restore({
    where: {
      id: id,
    },
  });
};

module.exports = {
  franelaData,
  franelaRestore,
  productoData,
  productoRestore,
  usuarioData,
  usuarioRestore,
};
