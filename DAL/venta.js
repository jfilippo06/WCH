const { Cliente } = require("../models");

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

module.exports = {
  cliente,
};
