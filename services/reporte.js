const {
  findAllClient,
  findFactura,
  findFranelas,
  findProductos,
  findTotals,
  totals,
  findClientes,
} = require("../DAL/reporte");
const {
  nextPage_4,
  prevPage_4,
  nextPage_5,
  prevPage_5,
  nextPage_6,
  prevPage_6,
  nextPage_7,
  prevPage_7,
} = require("../helpers/paginationTools");

const renderFacturaService = async () => {
  return await findAllClient();
};

const paginationFactura = async (page, size, valor, inicio, final) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  const data = await findFactura(limit, offset, valor, inicio, final);
  const { count: totalItems, rows: factura } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage_4(
    "reporte/factura",
    currentPage,
    totalPages,
    limit,
    valor,
    inicio,
    final
  );
  const prev = prevPage_4(
    "reporte/factura",
    currentPage,
    totalPages,
    limit,
    valor,
    inicio,
    final
  );
  return { factura, prev, next };
};

const inventarioService = async (page, size, numero, inicio, final) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;
  const { count: totalItemsFranela, rows: franela } = await findFranelas(
    limit,
    offset,
    numero,
    inicio,
    final
  );
  const { count: totalItemsProducto, rows: producto } = await findProductos(
    limit,
    offset,
    numero,
    inicio,
    final
  );
  const currentPage = page ? +page : 0;
  const totalPagesFranela = Math.ceil(totalItemsFranela / limit);
  const totalPagesProducto = Math.ceil(totalItemsProducto / limit);
  const nextFranela = nextPage_5(
    "reporte/inventario",
    currentPage,
    totalPagesFranela,
    limit,
    numero,
    inicio,
    final
  );
  const prevFranela = prevPage_5(
    "reporte/inventario",
    currentPage,
    totalPagesFranela,
    limit,
    numero,
    inicio,
    final
  );
  const nextProducto = nextPage_5(
    "reporte/inventario",
    currentPage,
    totalPagesProducto,
    limit,
    numero,
    inicio,
    final
  );
  const prevProducto = prevPage_5(
    "reporte/inventario",
    currentPage,
    totalPagesProducto,
    limit,
    numero,
    inicio,
    final
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
  const total = JSON.parse(valor.replace("sum(total)", "total"));
  return Math.floor(total.total * 100) / 100;
};

const clienteService = async (page, size, cedula, inicio, final) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  const { count: totalItems, rows: cliente } = await findClientes(
    limit,
    offset,
    cedula,
    inicio,
    final
  );
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage_7(
    "reporte/cliente",
    currentPage,
    totalPages,
    limit,
    cedula,
    inicio,
    final
  );
  const prev = prevPage_7(
    "reporte/cliente",
    currentPage,
    totalPages,
    limit,
    cedula,
    inicio,
    final
  );
  return { cliente, prev, next };
};

module.exports = {
  renderFacturaService,
  paginationFactura,
  inventarioService,
  ventaService,
  obtenerTotalServirce,
  clienteService,
};
