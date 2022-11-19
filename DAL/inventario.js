const { Franela, Producto } = require("../models");

const findAndCountAllfranelas = async (limit, offset, opcion, valor) => {
  if (opcion == "tela") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        tela: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "talla") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        talla: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "color") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        color: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "cuello") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        cuello: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "manga") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        manga: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "marca") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        marca: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "stock") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        stock: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "precio") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        precio: valor,
      },
      limit: limit,
      offset: offset,
    });
  } else {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      limit: limit,
      offset: offset,
    });
  }
};

const sumStock = async (opcion, valor) => {
  if (opcion == "tela") {
    return await Franela.sum("stock", {
      where: {
        tela: valor,
      },
    });
  }
  if (opcion == "talla") {
    return await Franela.sum("stock", {
      where: {
        talla: valor,
      },
    });
  }
  if (opcion == "color") {
    return await Franela.sum("stock", {
      where: {
        color: valor,
      },
    });
  }
  if (opcion == "cuello") {
    return await Franela.sum("stock", {
      where: {
        cuello: valor,
      },
    });
  }
  if (opcion == "manga") {
    return await Franela.sum("stock", {
      where: {
        manga: valor,
      },
    });
  }
  if (opcion == "marca") {
    return await Franela.sum("stock", {
      where: {
        marca: valor,
      },
    });
  }
  if (opcion == "stock") {
    return await Franela.sum("stock", {
      where: {
        stock: valor,
      },
    });
  }
  if (opcion == "precio") {
    return await Franela.sum("stock", {
      where: {
        precio: valor,
      },
    });
  } else {
    return await Franela.sum("stock");
  }
};

const findAndCountAllProductos = async (limit, offset, opcion, valor) => {
  if (opcion == "producto") {
    return await Producto.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        producto: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "tipo") {
    return await Producto.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        tipo: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "color") {
    return await Producto.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        color: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "cantidad") {
    return await Producto.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        cantidad: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "precio") {
    return await Producto.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        precio: valor,
      },
      limit: limit,
      offset: offset,
    });
  } else {
    return await Producto.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      limit: limit,
      offset: offset,
    });
  }
};

const sumCantidad = async (opcion, valor) => {
  if (opcion == "producto") {
    return await Producto.sum("cantidad", {
      where: {
        producto: valor,
      },
    });
  }
  if (opcion == "tipo") {
    return await Producto.sum("cantidad", {
      where: {
        tipo: valor,
      },
    });
  }
  if (opcion == "color") {
    return await Producto.sum("cantidad", {
      where: {
        color: valor,
      },
    });
  }
  if (opcion == "cantidad") {
    return await Producto.sum("cantidad", {
      where: {
        cantidad: valor,
      },
    });
  }
  if (opcion == "precio") {
    return await Producto.sum("cantidad", {
      where: {
        precio: valor,
      },
    });
  } else {
    return await Producto.sum("cantidad");
  }
};

const destroyfranela = async (id) => {
  await Franela.destroy({
    where: {
      id: id,
    },
  });
};

const destroyProducto = async (id) => {
  await Producto.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  findAndCountAllfranelas,
  sumStock,
  findAndCountAllProductos,
  sumCantidad,
  destroyfranela,
  destroyProducto,
};
