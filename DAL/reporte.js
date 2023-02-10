const {
  Cliente,
  Documento,
  Salida_franela,
  Salida_producto,
  Total,
} = require("../models");

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
      order: [["id", "DESC"]],
      limit: limit,
      offset: offset,
    });
  } else {
    return await Documento.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      order: [["id", "DESC"]],
      limit: limit,
      offset: offset,
    });
  }
};

const findFranelas = async (limit, offset, numero) => {
  if (numero) {
    return await Salida_franela.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      where: {
        OrderId: numero,
      },
      order: [["id", "DESC"]],
      limit: limit,
      offset: offset,
    });
  } else {
    return await Salida_franela.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      order: [["id", "DESC"]],
      limit: limit,
      offset: offset,
    });
  }
};

const findProductos = async (limit, offset, numero) => {
  if (numero) {
    return await Salida_producto.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      where: {
        OrderId: numero,
      },
      order: [["id", "DESC"]],
      limit: limit,
      offset: offset,
    });
  } else {
    return await Salida_producto.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      order: [["id", "DESC"]],
      limit: limit,
      offset: offset,
    });
  }
};

const findTotals = async (limit, offset, numero) => {
  if (numero) {
    return await Total.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      where: {
        OrderId: numero,
      },
      limit: limit,
      offset: offset,
    });
  } else {
    return await Total.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      order: [["id", "DESC"]],
      limit: limit,
      offset: offset,
    });
  }
};

module.exports = {
  findAllClient,
  findFactura,
  findFranelas,
  findProductos,
  findTotals,
};
