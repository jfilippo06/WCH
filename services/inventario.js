const {
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
} = require("../DAL/inventario");
const { nextPage, prevPage } = require("../helpers/paginationTools");

const franelaService = async (page, size, opcion, valor) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  const data = await findAndCountAllfranelas(limit, offset, opcion, valor);
  const stock = await sumStock(opcion, valor);
  const { count: totalItems, rows: franelas } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage(
    "inventario/franela",
    currentPage,
    totalPages,
    limit,
    opcion,
    valor
  );
  const prev = prevPage(
    "inventario/franela",
    currentPage,
    totalPages,
    limit,
    opcion,
    valor
  );
  return { totalItems, franelas, prev, next, stock };
};

const productoService = async (page, size, opcion, valor) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  const data = await findAndCountAllProductos(limit, offset, opcion, valor);
  const cantidad = await sumCantidad(opcion, valor);
  const { count: totalItems, rows: productos } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage(
    "inventario/producto",
    currentPage,
    totalPages,
    limit,
    opcion,
    valor
  );
  const prev = prevPage(
    "inventario/producto",
    currentPage,
    totalPages,
    limit,
    opcion,
    valor
  );
  return { totalItems, productos, prev, next, cantidad };
};

const deshabilitarFranelaService = async (id) => {
  await destroyfranela(id);
};

const deshabilitarProductoService = async (id) => {
  await destroyProducto(id);
};

const registrarFranelaService = async (
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
  await createFranela(
    codigo,
    tela,
    talla,
    color,
    cuello,
    manga,
    marca,
    stock,
    precio
  );
};

const registrarProductoService = async (
  codigo,
  producto,
  tipo,
  color,
  cantidad,
  precio
) => {
  await createProducto(codigo, producto, tipo, color, cantidad, precio);
};

const idFranela = async (id) => {
  return await getFranela(id);
};

const idProducto = async (id) => {
  return await getProducto(id);
};

const editFranela = async (
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
  await editarFranela(
    id,
    tela,
    talla,
    color,
    cuello,
    manga,
    marca,
    stock,
    precio
  );
};

const editProducto = async (id, producto, tipo, color, cantidad, precio) => {
  await editarProducto(id, producto, tipo, color, cantidad, precio);
};

module.exports = {
  franelaService,
  productoService,
  deshabilitarFranelaService,
  deshabilitarProductoService,
  registrarFranelaService,
  registrarProductoService,
  idFranela,
  idProducto,
  editFranela,
  editProducto,
};
