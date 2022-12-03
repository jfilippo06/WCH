const { Cliente, sequelize, Order, Franela, Producto } = require("../models");
const AppError = require("../errors/appErrors");

const cliente = async (cedula) => {
  return await Cliente.findOne({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    where: {
      cedula: cedula,
    },
  });
};

const obtenerOrder = async () => {
  return ([results] = await sequelize.query(
    "SELECT Orders.numero FROM Orders ORDER by Orders.numero DESC LIMIT 1",
    {
      model: Order,
      mapToModel: true,
    }
  ));
};

const registrarCliente = async (nombre, cedula) => {
  const cliente = await Cliente.findOne({
    where: {
      cedula: cedula,
    },
  });
  if (cliente) throw new AppError("Cliente ya existe", 404);
  await Cliente.create({
    nombre: nombre,
    cedula: cedula,
  });
};

const findFranelas = async (limit, offset, opcion, tipo, valor) => {
  if (opcion == "franelas") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      limit: limit,
      offset: offset,
    });
  } else {
    return "";
  }
};

const findProductos = async (limit, offset, opcion, tipo, valor) => {
  if (opcion == "productos") {
    return await Producto.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      limit: limit,
      offset: offset,
    });
  } else {
    return "";
  }
};

module.exports = {
  cliente,
  obtenerOrder,
  registrarCliente,
  findFranelas,
  findProductos,
};
