const { findAllClient, findFactura } = require("../DAL/reporte");
const { nextPage, prevPage } = require("../helpers/paginationTools");

const renderFacturaService = async () => {
  return await findAllClient();
};

const paginationFactura = async (page, size, valor) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;
  const data = await findFactura(limit, offset, valor);
  const { count: totalItems, rows: factura } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage(
    "reporte/factura",
    currentPage,
    totalPages,
    limit
  );
  const prev = prevPage(
    "reporte/factura",
    currentPage,
    totalPages,
    limit
  );
  return { factura, prev, next };
};

module.exports = {
  renderFacturaService,
  paginationFactura,
};
