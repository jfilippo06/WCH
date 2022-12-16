const { Cliente, Documento } = require("../models");

const findAllClient = async () => {
  return await Cliente.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
};

const findFactura = async (limit, offset, valor) => {
  if (valor) {
    return await Documento.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      where: {
        ClienteId: valor,
      },
      limit: limit,
      offset: offset,
    });
  } else {
    return await Documento.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      limit: limit,
      offset: offset,
    });
  }
};

module.exports = {
  findAllClient,
  findFactura,
};
