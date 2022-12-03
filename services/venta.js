const { cliente, obtenerOrder } = require("../DAL/venta");

const buscarClienteService = async (cedula) => {
  return await cliente(cedula);
};

const buscarOrderService = async () => {
  const data = await obtenerOrder();
  return data[0].numero
};

module.exports = {
  buscarClienteService,
  buscarOrderService,
};
