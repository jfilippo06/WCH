const { Cliente, sequelize, Order } = require("../models");
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

module.exports = {
  cliente,
  obtenerOrder,
  registrarCliente,
};
