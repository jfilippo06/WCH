const {
  Cliente,
  sequelize,
  Order,
  Franela,
  Producto,
  Factura_franela,
  Factura_producto,
  Salida_franela,
  Salida_producto,
  Documento,
} = require("../models");
const AppError = require("../errors/appErrors");
const { QueryTypes } = require("sequelize");

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

const registrarCliente = async (nombre, cedula) => {
  const cliente = await Cliente.findOne({
    where: {
      cedula: cedula,
    },
  });
  if (cliente) throw new AppError("Cliente ya existe", 404);
  await Cliente.create({
    nombre: nombre,
    cedula: cedula,
  });
};

const findFranelas = async (limit, offset, opcion, tipo, valor) => {
  if (opcion == "franelas" && tipo == "codigo") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        codigo: valor,
      },
      limit: limit,
      offset: offset,
    });
  } else if (opcion == "franelas" && tipo == "tela") {
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
  } else if (opcion == "franelas" && tipo == "talla") {
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
  } else if (opcion == "franelas" && tipo == "color") {
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
  } else if (opcion == "franelas" && tipo == "cuello") {
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
  } else if (opcion == "franelas" && tipo == "manga") {
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
  } else if (opcion == "franelas" && tipo == "marca") {
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
  } else if (opcion == "franelas" && tipo == "stock") {
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
  } else if (opcion == "franelas" && tipo == "precio") {
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
  } else if (opcion == "franelas") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      limit: limit,
      offset: offset,
    });
  } else {
    return "";
  }
};

const stockFranelas = async (opcion, tipo, valor) => {
  if (opcion == "franelas" && tipo == "codigo") {
    return await Franela.sum("stock", {
      where: {
        codigo: valor,
      },
    });
  } else if (opcion == "franelas" && tipo == "tela") {
    return await Franela.sum("stock", {
      where: {
        tela: valor,
      },
    });
  } else if (opcion == "franelas" && tipo == "talla") {
    return await Franela.sum("stock", {
      where: {
        talla: valor,
      },
    });
  } else if (opcion == "franelas" && tipo == "color") {
    return await Franela.sum("stock", {
      where: {
        color: valor,
      },
    });
  } else if (opcion == "franelas" && tipo == "cuello") {
    return await Franela.sum("stock", {
      where: {
        cuello: valor,
      },
    });
  } else if (opcion == "franelas" && tipo == "manga") {
    return await Franela.sum("stock", {
      where: {
        manga: valor,
      },
    });
  } else if (opcion == "franelas" && tipo == "marca") {
    return await Franela.sum("stock", {
      where: {
        marca: valor,
      },
    });
  } else if (opcion == "franelas" && tipo == "stock") {
    return await Franela.sum("stock", {
      where: {
        stock: valor,
      },
    });
  } else if (opcion == "franelas" && tipo == "precio") {
    return await Franela.sum("stock", {
      where: {
        precio: valor,
      },
    });
  } else if (opcion == "franelas") {
    return await Franela.sum("stock");
  } else {
    return "";
  }
};

const findProductos = async (limit, offset, opcion, tipo, valor) => {
  if (opcion == "productos" && tipo == "codigo") {
    return await Producto.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        codigo: valor,
      },
      limit: limit,
      offset: offset,
    });
  } else if (opcion == "productos" && tipo == "producto") {
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
  } else if (opcion == "productos" && tipo == "tipo") {
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
  } else if (opcion == "productos" && tipo == "color") {
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
  } else if (opcion == "productos" && tipo == "cantidad") {
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
  } else if (opcion == "productos" && tipo == "precio") {
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
  } else if (opcion == "productos") {
    return await Producto.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      limit: limit,
      offset: offset,
    });
  } else {
    return "";
  }
};

const stockProductos = async (opcion, tipo, valor) => {
  if (opcion == "productos" && tipo == "codigo") {
    return await Producto.sum("cantidad", {
      where: {
        codigo: valor,
      },
    });
  } 
  else if (opcion == "productos" && tipo == "producto") {
    return await Producto.sum("cantidad", {
      where: {
        producto: valor,
      },
    });
  } 
  else if (opcion == "productos" && tipo == "tipo") {
    return await Producto.sum("cantidad", {
      where: {
        tipo: valor,
      },
    });
  } else if (opcion == "productos" && tipo == "color") {
    return await Producto.sum("cantidad", {
      where: {
        color: valor,
      },
    });
  } else if (opcion == "cantidad") {
    return await Producto.sum("cantidad", {
      where: {
        cantidad: valor,
      },
    });
  } else if (opcion == "productos" && tipo == "precio") {
    return await Producto.sum("cantidad", {
      where: {
        precio: valor,
      },
    });
  } else if (opcion == "productos") {
    return await Producto.sum("cantidad");
  } else {
    return "";
  }
};

const franelaId = async (idFranela) => {
  return await Franela.findOne({
    attributes: {
      exclude: [
        "id",
        "tela",
        "talla",
        "color",
        "cuello",
        "manga",
        "marca",
        "precio",
        "createdAt",
        "updatedAt",
        "deletedAt",
      ],
    },
    where: {
      id: idFranela,
    },
  });
};

const getFranela = async (id, idFranela, order) => {
  const franela = await Factura_franela.findOne({
    where: {
      ClienteId: id,
      FranelaId: idFranela,
      OrderId: order,
    },
  });
  if (franela) throw new AppError("Registro ya existe", 200);
};

const nombreFranela = async (idFranela) => {
  return await Franela.findOne({
    attributes: {
      exclude: ["id", "stock", "precio", "createdAt", "updatedAt", "deletedAt"],
    },
    where: {
      id: idFranela,
    },
  });
};

const obtenerTotal = async (idFranela) => {
  return await Franela.findOne({
    attributes: {
      exclude: [
        "id",
        "tela",
        "talla",
        "color",
        "cuello",
        "manga",
        "marca",
        "stock",
        "createdAt",
        "updatedAt",
        "deletedAt",
      ],
    },
    where: {
      id: idFranela,
    },
  });
};

const registrarFacturaFranela = async (
  id,
  idFranela,
  franela,
  vendidos,
  unidad,
  total,
  order
) => {
  await Factura_franela.create({
    ClienteId: id,
    FranelaId: idFranela,
    franela: franela,
    cantidad: vendidos,
    unidad: unidad,
    total: total,
    OrderId: order,
  });
};

const getProducto = async (id, idProducto, order) => {
  const producto = await Factura_producto.findOne({
    where: {
      ClienteId: id,
      ProductoId: idProducto,
      OrderId: order,
    },
  });
  if (producto) throw new AppError("Registro ya existe", 200);
};

const productoId = async (idProducto) => {
  return await Producto.findOne({
    attributes: {
      exclude: [
        "id",
        "producto",
        "tipo",
        "color",
        "precio",
        "createdAt",
        "updatedAt",
        "deletedAt",
      ],
    },
    where: {
      id: idProducto,
    },
  });
};

const nombreProducto = async (idProducto) => {
  return await Producto.findOne({
    attributes: {
      exclude: [
        "id",
        "cantidad",
        "precio",
        "createdAt",
        "updatedAt",
        "deletedAt",
      ],
    },
    where: {
      id: idProducto,
    },
  });
};

const obtenerTotal2 = async (idProducto) => {
  return await Producto.findOne({
    attributes: {
      exclude: [
        "id",
        "producto",
        "tipo",
        "color",
        "cantidad",
        "createdAt",
        "updatedAt",
        "deletedAt",
      ],
    },
    where: {
      id: idProducto,
    },
  });
};

const registrarFacturaProducto = async (
  id,
  idProducto,
  product,
  vendidos,
  unidad,
  total,
  order
) => {
  await Factura_producto.create({
    ClienteId: id,
    ProductoId: idProducto,
    producto: product,
    cantidad: vendidos,
    unidad: unidad,
    total: total,
    OrderId: order,
  });
};

const facturaFranela = async (id, order) => {
  return await Factura_franela.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    where: {
      ClienteId: id,
      OrderId: order,
    },
  });
};

const facturaProducto = async (id, order) => {
  return await Factura_producto.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    where: {
      ClienteId: id,
      OrderId: order,
    },
  });
};

const totalFranela = async (id, order) => {
  return ([results] = await sequelize.query(
    "SELECT sum(total) FROM Factura_franelas WHERE Factura_franelas.ClienteId = :id and Factura_franelas.OrderId = :order",
    {
      model: Factura_franela,
      replacements: {
        id: id,
        order: order,
      },
      type: QueryTypes.SELECT,
    }
  ));
};

const totalProducto = async (id, order) => {
  return ([results] = await sequelize.query(
    "SELECT sum(total) FROM Factura_productos WHERE Factura_productos.ClienteId = :id and Factura_productos.OrderId = :order",
    {
      model: Factura_producto,
      replacements: {
        id: id,
        order: order,
      },
      type: QueryTypes.SELECT,
    }
  ));
};

const deleteFranela = async (id) => {
  await Factura_franela.destroy({
    where: {
      id: id,
    },
  });
};

const deleteProducto = async (id) => {
  await Factura_producto.destroy({
    where: {
      id: id,
    },
  });
};

const cancelarFranela = async (id, order) => {
  await Factura_franela.destroy({
    where: {
      ClienteId: id,
      OrderId: order,
    },
  });
};

const cancelarProducto = async (id, order) => {
  await Factura_producto.destroy({
    where: {
      ClienteId: id,
      OrderId: order,
    },
  });
};

const registrarSalidaFranela = async (
  id,
  idFranela,
  franela,
  vendidos,
  unidad,
  total,
  order
) => {
  await Salida_franela.create({
    ClienteId: id,
    FranelaId: idFranela,
    franela: franela,
    cantidad: vendidos,
    unidad: unidad,
    total: total,
    OrderId: order,
  });
};

const registrarSalidaProducto = async (
  id,
  idProducto,
  product,
  vendidos,
  unidad,
  total,
  order
) => {
  await Salida_producto.create({
    ClienteId: id,
    ProductoId: idProducto,
    producto: product,
    cantidad: vendidos,
    unidad: unidad,
    total: total,
    OrderId: order,
  });
};

const updateFranela = async (id, valor) => {
  await Franela.update(
    {
      stock: valor,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

const updateProducto = async (id, valor) => {
  await Producto.update(
    {
      cantidad: valor,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

const registrarOrder = async (numero) => {
  await Order.create({ numero: numero });
};

const registrarDocumento = async (id, nombre, order, link) => {
  await Documento.create({
    ClienteId: id,
    nombre: nombre,
    OrderId: order,
    link: link,
  });
};

const findDocumento = async (id, order) => {
  return await Documento.findOne({
    attributes: {
      exclude: ["id", "ClienteId", "OrderId", "createdAt", "updatedAt"],
    },
    where: {
      ClienteId: id,
      OrderId: order,
    },
  });
};

module.exports = {
  cliente,
  obtenerOrder,
  registrarCliente,
  findFranelas,
  findProductos,
  stockFranelas,
  stockProductos,
  franelaId,
  getFranela,
  nombreFranela,
  obtenerTotal,
  registrarFacturaFranela,
  getProducto,
  productoId,
  nombreProducto,
  obtenerTotal2,
  registrarFacturaProducto,
  facturaFranela,
  facturaProducto,
  totalFranela,
  totalProducto,
  deleteFranela,
  deleteProducto,
  cancelarFranela,
  cancelarProducto,
  registrarSalidaFranela,
  registrarSalidaProducto,
  updateFranela,
  updateProducto,
  registrarOrder,
  registrarDocumento,
  findDocumento,
};
