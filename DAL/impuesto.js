const { Impuesto } = require("../models");

const activarImpuesto = async () => {
  await Impuesto.update(
    {
      estado: true,
    },
    {
      where: {
        id: 1,
      },
    }
  );
};

const desactivarImpuesto = async () => {
  await Impuesto.update(
    {
      estado: false,
    },
    {
      where: {
        id: 1,
      },
    }
  );
};

const gotIva = async () => {
  return await Impuesto.findOne({
    where: {
      id: 1,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
  });
};

const actualizarImpuesto = async (nombre, valor) => {
  await Impuesto.update(
    {
      nombre: nombre,
      valor: valor,
    },
    {
      where: {
        id: 1,
      },
    }
  );
};

module.exports = {
  activarImpuesto,
  desactivarImpuesto,
  gotIva,
  actualizarImpuesto,
};
