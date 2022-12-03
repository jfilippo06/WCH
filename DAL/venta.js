const { Cliente, sequelize, Order } = require("../models");

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

module.exports = {
  cliente,
  obtenerOrder,
};
