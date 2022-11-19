const {
  findAndCountAllfranelas,
  sumStock,
  findAndCountAllProductos,
  sumCantidad,
  destroyfranela,
  destroyProducto,
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

module.exports = {
  franelaService,
  productoService,
  deshabilitarFranelaService,
  deshabilitarProductoService,
};
