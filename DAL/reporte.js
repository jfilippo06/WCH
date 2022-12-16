const { Cliente } = require("../models");

const findAllClient = async () => {
  return await Cliente.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
};

module.exports = {
  findAllClient,
};
