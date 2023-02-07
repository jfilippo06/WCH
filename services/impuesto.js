const {
  activarImpuesto,
  desactivarImpuesto,
  gotIva,
  actualizarImpuesto,
} = require("../DAL/impuesto");

const activarService = async () => {
  await activarImpuesto();
};

const desactivarServive = async () => {
  await desactivarImpuesto();
};

const gotIvaServive = async () => {
  return await gotIva();
};

const actualizarService = async (nombre, valor) => {
  await actualizarImpuesto(nombre, valor);
};

module.exports = {
  activarService,
  desactivarServive,
  gotIvaServive,
  actualizarService,
};
