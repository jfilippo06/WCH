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
} = require("../DAL/venta");
const { nextPage_3, prevPage_3 } = require("../helpers/paginationTools");

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

const obtenerTotalService = async (id, order) => {
  const data = await totalFranela(id, order);
  const data2 = await totalProducto(id, order);
  const franela = JSON.stringify(data[0]);
  const producto = JSON.stringify(data2[0]);
  const total1 = JSON.parse(franela.replace("sum(total)", "total"));
  const total2 = JSON.parse(producto.replace("sum(total)", "total"));
  return (total1.total + total2.total).toFixed(2);
};

const deleteFranelaService = async (id) => {
  await deleteFranela(id);
};

const deleteProductoService = async (id) => {
  await deleteProducto(id);
};

const cancelarService = async (id, order) => {
  await cancelarFranela(id, order);
  await cancelarProducto(id, order);
};

const pedidoFranelaService = async (facturaFranela) => {
  for (let i = 0; i < facturaFranela.length; i++) {
    await registrarSalidaFranela(
      facturaFranela[i].ClienteId,
      facturaFranela[i].FranelaId,
      facturaFranela[i].franela,
      facturaFranela[i].cantidad,
      facturaFranela[i].total,
      facturaFranela[i].OrderId
    );
  }
};

const pedidoProductoService = async (facturaProducto) => {
  for (let i = 0; i < facturaProducto.length; i++) {
    await registrarSalidaProducto(
      facturaProducto[i].ClienteId,
      facturaProducto[i].ProductoId,
      facturaProducto[i].producto,
      facturaProducto[i].cantidad,
      facturaProducto[i].total,
      facturaProducto[i].OrderId
    );
  }
};

const updateFranelaService = async (facturaFranela) => {
  for (let i = 0; i < facturaFranela.length; i++) {
    const stock = await obtenerFranelaService(facturaFranela[i].FranelaId);
    const total = stock - facturaFranela[i].cantidad;
    await updateFranela(facturaFranela[i].FranelaId, total);
  }
};

const updateProductoService = async (facturaProducto) => {
  for (let i = 0; i < facturaProducto.length; i++) {
    const cantidad = await obtenerProductoService(
      facturaProducto[i].ProductoId
    );
    const total = cantidad - facturaProducto[i].cantidad;
    await updateProducto(facturaProducto[i].ProductoId, total);
  }
};

const registrarOrderService = async () => {
  const order = await buscarOrderService();
  const numero = order + 1;
  await registrarOrder(numero);
};

const registrarDocumentoService = async (id, order, link) => {
  await registrarDocumento(id, order, link);
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
  obtenerTotalService,
  deleteFranelaService,
  deleteProductoService,
  cancelarService,
  pedidoFranelaService,
  pedidoProductoService,
  updateFranelaService,
  updateProductoService,
  registrarOrderService,
  registrarDocumentoService,
};
