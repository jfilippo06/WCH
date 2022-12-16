const { findAllClient, findFactura } = require("../DAL/reporte");
const { nextPage_4, prevPage_4 } = require("../helpers/paginationTools");

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

module.exports = {
  renderFacturaService,
  paginationFactura,
};
