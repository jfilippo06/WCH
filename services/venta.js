const { cliente } = require("../DAL/venta");

const buscarClienteService = async (cedula) => {
  return await cliente(cedula);
};

module.exports = {
  buscarClienteService,
};
