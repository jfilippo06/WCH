const { Franela, Producto } = require("../models");
const AppError = require("../errors/appErrors");

const findAndCountAllfranelas = async (limit, offset, opcion, valor) => {
  if (opcion == "codigo") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        codigo: valor.toUpperCase(),
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "tela") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        tela: valor.toUpperCase(),
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
        talla: valor.toUpperCase(),
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
        color: valor.toUpperCase(),
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
        cuello: valor.toUpperCase(),
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
        manga: valor.toUpperCase(),
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
        marca: valor.toUpperCase(),
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
  if (opcion == "codigo") {
    return await Franela.sum("stock", {
      where: {
        codigo: valor.toUpperCase(),
      },
    });
  }
  if (opcion == "tela") {
    return await Franela.sum("stock", {
      where: {
        tela: valor.toUpperCase(),
      },
    });
  }
  if (opcion == "talla") {
    return await Franela.sum("stock", {
      where: {
        talla: valor.toUpperCase(),
      },
    });
  }
  if (opcion == "color") {
    return await Franela.sum("stock", {
      where: {
        color: valor.toUpperCase(),
      },
    });
  }
  if (opcion == "cuello") {
    return await Franela.sum("stock", {
      where: {
        cuello: valor.toUpperCase(),
      },
    });
  }
  if (opcion == "manga") {
    return await Franela.sum("stock", {
      where: {
        manga: valor.toUpperCase(),
      },
    });
  }
  if (opcion == "marca") {
    return await Franela.sum("stock", {
      where: {
        marca: valor.toUpperCase(),
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
  if (opcion == "codigo") {
    return await Producto.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        codigo: valor.toUpperCase(),
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "producto") {
    return await Producto.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        producto: valor.toUpperCase(),
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
        tipo: valor.toUpperCase(),
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
        color: valor.toUpperCase(),
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
  if (opcion == "codigo") {
    return await Producto.sum("cantidad", {
      where: {
        codigo: valor.toUpperCase(),
      },
    });
  }
  if (opcion == "producto") {
    return await Producto.sum("cantidad", {
      where: {
        producto: valor.toUpperCase(),
      },
    });
  }
  if (opcion == "tipo") {
    return await Producto.sum("cantidad", {
      where: {
        tipo: valor.toUpperCase(),
      },
    });
  }
  if (opcion == "color") {
    return await Producto.sum("cantidad", {
      where: {
        color: valor.toUpperCase(),
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

const createFranela = async (
  codigo,
  tela,
  talla,
  color,
  cuello,
  manga,
  marca,
  stock,
  precio
) => {
  const codigoData = await Franela.findOne({
    where: {
      codigo: codigo.toUpperCase(),
    },
  });
  if (codigoData) throw new AppError("Codigo ya existe", 200);
  const franela = await Franela.findOne({
    where: {
      tela: tela.toUpperCase(),
      talla: talla.toUpperCase(),
      color: color.toUpperCase(),
      cuello: cuello.toUpperCase(),
      manga: manga.toUpperCase(),
      marca: marca.toUpperCase(),
    },
  });
  if (franela) throw new AppError("Registro ya existe", 200);
  await Franela.create({
    codigo: codigo.toUpperCase(),
    tela: tela.toUpperCase(),
    talla: talla.toUpperCase(),
    color: color.toUpperCase(),
    cuello: cuello.toUpperCase() || "",
    manga: manga.toUpperCase() || "",
    marca: marca.toUpperCase() || "",
    stock: stock,
    precio: precio,
  });
};

const createProducto = async (
  codigo,
  producto,
  tipo,
  color,
  cantidad,
  precio
) => {
  const codigoData = await Producto.findOne({
    where: {
      codigo: codigo.toUpperCase(),
    },
  });
  if (codigoData) throw new AppError("Codigo ya existe", 200);
  const data = await Producto.findOne({
    where: {
      producto: producto.toUpperCase(),
      tipo: tipo.toUpperCase(),
      color: color.toUpperCase(),
    },
  });
  if (data) throw new AppError("Registro ya existe", 200);
  await Producto.create({
    codigo: codigo.toUpperCase(),
    producto: producto.toUpperCase(),
    tipo: tipo.toUpperCase(),
    color: color.toUpperCase(),
    cantidad: cantidad,
    precio: precio,
  });
};

const getFranela = async (id) => {
  return await Franela.findOne({
    where: {
      id: id,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
  });
};

const getProducto = async (id) => {
  return await Producto.findOne({
    where: {
      id: id,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
  });
};

const editarFranela = async (
  id,
  tela,
  talla,
  color,
  cuello,
  manga,
  marca,
  stock,
  precio
) => {
  await Franela.update(
    {
      tela: tela.toUpperCase(),
      talla: talla.toUpperCase(),
      color: color.toUpperCase(),
      cuello: cuello.toUpperCase(),
      manga: manga.toUpperCase(),
      marca: marca.toUpperCase(),
      stock: stock,
      precio: precio,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

const editarProducto = async (id, producto, tipo, color, cantidad, precio) => {
  await Producto.update(
    {
      producto: producto.toUpperCase(),
      tipo: tipo.toUpperCase(),
      color: color.toUpperCase(),
      cantidad: cantidad,
      precio: precio,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

module.exports = {
  findAndCountAllfranelas,
  sumStock,
  findAndCountAllProductos,
  sumCantidad,
  destroyfranela,
  destroyProducto,
  createFranela,
  createProducto,
  getFranela,
  getProducto,
  editarFranela,
  editarProducto,
};
