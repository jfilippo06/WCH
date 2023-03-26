const {
  Cliente,
  Documento,
  Salida_franela,
  Salida_producto,
  Total,
  sequelize,
} = require("../models");
const { QueryTypes, Op } = require("sequelize");

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

const findFranelas = async (limit, offset, numero, inicio, final) => {
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
  } else if (inicio && final) {
    return await Salida_franela.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      where: {
        createdAt: {
          [Op.between]: [`${inicio} 00:00:00`, `${final} 24:00:00`],
        },
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

const findProductos = async (limit, offset, numero, inicio, final) => {
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
  } else if (inicio && final) {
    return await Salida_producto.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      where: {
        createdAt: {
          [Op.between]: [`${inicio} 00:00:00`, `${final} 24:00:00`],
        },
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

const findTotals = async (limit, offset, numero, inicio, final) => {
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
  } else if (inicio && final) {
    return await Total.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      where: {
        createdAt: {
          [Op.between]: [`${inicio} 00:00:00`, `${final} 24:00:00`],
        },
      },
      order: [["id", "DESC"]],
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

const totals = async (inicio, final) => {
  return ([results] = await sequelize.query(
    "SELECT sum(total) FROM Totals WHERE Totals.createdAt BETWEEN :inicio AND :final",
    {
      model: Total,
      replacements: {
        inicio: `${inicio} 00:00:00`,
        final: `${final} 24:00:00`,
      },
      type: QueryTypes.SELECT,
    }
  ));
};

const findClientes = async (limit, offset, cedula, inicio, final) => {
  if (cedula) {
    return await Cliente.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      where: {
        cedula: cedula,
      },
      order: [["id", "DESC"]],
      limit: limit,
      offset: offset,
    });
  } else if (inicio && final) {
    return await Cliente.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      where: {
        createdAt: {
          [Op.between]: [`${inicio} 00:00:00`, `${final} 24:00:00`],
        },
      },
      order: [["id", "DESC"]],
      limit: limit,
      offset: offset,
    });
  } else {
    return await Cliente.findAndCountAll({
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
  totals,
  findClientes,
};
