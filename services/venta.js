const {
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
} = require("../DAL/venta");
const { nextPage_3, prevPage_3 } = require("../helpers/paginationTools");

const buscarClienteService = async (cedula) => {
  return await cliente(cedula);
};

const buscarOrderService = async () => {
  const data = await obtenerOrder();
  return data[0].id;
};

const registrarClienteService = async (nombre, cedula) => {
  await registrarCliente(nombre, cedula);
};

const facturaFranelasService = async (page, size, opcion, tipo, valor) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;
  const data = await findFranelas(limit, offset, opcion, tipo, valor);
  const franelaStock = await stockFranelas(opcion, tipo, valor);
  const { count: totalItemsFranelas, rows: franelas } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItemsFranelas / limit);
  const prevFranelas = prevPage_3(
    "venta/facturar",
    currentPage,
    totalPages,
    limit,
    opcion,
    tipo,
    valor
  );
  const nextFranelas = nextPage_3(
    "venta/facturar",
    currentPage,
    totalPages,
    limit,
    opcion,
    tipo,
    valor
  );
  return {
    totalItemsFranelas,
    franelas,
    prevFranelas,
    nextFranelas,
    franelaStock,
  };
};

const facturaProductosService = async (page, size, opcion, tipo, valor) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;
  const data = await findProductos(limit, offset, opcion, tipo, valor);
  const productoStock = await stockProductos(opcion, tipo, valor);
  const { count: totalItemsProductos, rows: productos } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItemsProductos / limit);
  const prevProductos = prevPage_3(
    "venta/facturar",
    currentPage,
    totalPages,
    limit,
    opcion,
    tipo,
    valor
  );
  const nextProductos = nextPage_3(
    "venta/facturar",
    currentPage,
    totalPages,
    limit,
    opcion,
    tipo,
    valor
  );
  return {
    totalItemsProductos,
    productos,
    prevProductos,
    nextProductos,
    productoStock,
  };
};

const obtenerFranelaService = async (idFranela) => {
  const data = await franelaId(idFranela);
  return data.stock;
};

const buscarFranelaService = async (id, idFranela, order) => {
  await getFranela(id, idFranela, order);
};

const registrarFranelaService = async (id, idFranela, order, vendidos) => {
  const data = await nombreFranela(idFranela);
  const { tela, talla, color, cuello, manga, marca } = data;
  const franela = `FRANELA ${tela} ${color} TALLA:${talla} ${marca} ${cuello} ${manga}`;
  const data2 = await obtenerTotal(idFranela);
  const total = (data2.precio * vendidos).toFixed(2);
  await registrarFacturaFranela(id, idFranela, franela, vendidos, total, order);
};

const buscarProductoService = async (id, idProducto, order) => {
  await getProducto(id, idProducto, order);
};

const obtenerProductoService = async (idProducto) => {
  const data = await productoId(idProducto);
  return data.cantidad;
};

const registrarProductoService = async (id, idProducto, order, vendidos) => {
  const data = await nombreProducto(idProducto);
  const { producto, tipo, color } = data;
  const product = `PRODUCTO ${producto} ${tipo} ${color}`;
  const data2 = await obtenerTotal2(idProducto);
  const total = (data2.precio * vendidos).toFixed(2);
  await registrarFacturaProducto(
    id,
    idProducto,
    product,
    vendidos,
    total,
    order
  );
};

const obtenerFacturaFranela = async (id, order) => {
  return await facturaFranela(id, order);
};

const obtenerFacturaProducto = async (id, order) => {
  return await facturaProducto(id, order);
};

module.exports = {
  buscarClienteService,
  buscarOrderService,
  registrarClienteService,
  facturaFranelasService,
  facturaProductosService,
  obtenerFranelaService,
  buscarFranelaService,
  registrarFranelaService,
  buscarProductoService,
  obtenerProductoService,
  registrarProductoService,
  obtenerFacturaFranela,
  obtenerFacturaProducto,
};
