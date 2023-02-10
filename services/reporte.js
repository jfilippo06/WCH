const {
  findAllClient,
  findFactura,
  findFranelas,
  findProductos,
  findTotals,
  totals,
} = require("../DAL/reporte");
const {
  nextPage_4,
  prevPage_4,
  nextPage_5,
  prevPage_5,
  nextPage_6,
  prevPage_6,
} = require("../helpers/paginationTools");

const renderFacturaService = async () => {
  return await findAllClient();
};

const paginationFactura = async (page, size, valor) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  const data = await findFactura(limit, offset, valor);
  const { count: totalItems, rows: factura } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage_4(
    "reporte/factura",
    currentPage,
    totalPages,
    limit,
    valor
  );
  const prev = prevPage_4(
    "reporte/factura",
    currentPage,
    totalPages,
    limit,
    valor
  );
  return { factura, prev, next };
};

const inventarioService = async (page, size, numero) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;
  const { count: totalItemsFranela, rows: franela } = await findFranelas(
    limit,
    offset,
    numero
  );
  const { count: totalItemsProducto, rows: producto } = await findProductos(
    limit,
    offset,
    numero
  );
  const currentPage = page ? +page : 0;
  const totalPagesFranela = Math.ceil(totalItemsFranela / limit);
  const totalPagesProducto = Math.ceil(totalItemsProducto / limit);
  const nextFranela = nextPage_5(
    "reporte/inventario",
    currentPage,
    totalPagesFranela,
    limit,
    numero
  );
  const prevFranela = prevPage_5(
    "reporte/inventario",
    currentPage,
    totalPagesFranela,
    limit,
    numero
  );
  const nextProducto = nextPage_5(
    "reporte/inventario",
    currentPage,
    totalPagesProducto,
    limit,
    numero
  );
  const prevProducto = prevPage_5(
    "reporte/inventario",
    currentPage,
    totalPagesProducto,
    limit,
    numero
  );
  return {
    franela,
    producto,
    prevFranela,
    nextFranela,
    prevProducto,
    nextProducto,
  };
};

const ventaService = async (page, size, numero, inicio, final) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  const { count: totalItems, rows: total } = await findTotals(
    limit,
    offset,
    numero,
    inicio,
    final
  );
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage_6(
    "reporte/venta",
    currentPage,
    totalPages,
    limit,
    numero,
    inicio,
    final
  );
  const prev = prevPage_6(
    "reporte/venta",
    currentPage,
    totalPages,
    limit,
    numero,
    inicio,
    final
  );
  return { total, next, prev };
};

const obtenerTotalServirce = async (inicio, final) => {
  const data = await totals(inicio, final);
  const valor = JSON.stringify(data[0]);
  return JSON.parse(valor.replace("sum(total)", "total"));
};

module.exports = {
  renderFacturaService,
  paginationFactura,
  inventarioService,
  ventaService,
  obtenerTotalServirce,
};
