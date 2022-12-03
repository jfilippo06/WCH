const { cliente, obtenerOrder, registrarCliente } = require("../DAL/venta");

const buscarClienteService = async (cedula) => {
  return await cliente(cedula);
};

const buscarOrderService = async () => {
  const data = await obtenerOrder();
  return data[0].numero;
};

const registrarClienteService = async (nombre, cedula) => {
  await registrarCliente(nombre, cedula);
};

module.exports = {
  buscarClienteService,
  buscarOrderService,
  registrarClienteService,
};
