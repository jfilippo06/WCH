const { findAndCountAllfranelas } = require("../DAL/inventario");
const { nextPage, prevPage } = require("../helpers/paginationTools");

const franelaService = async (page, size, opcion, valor) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  const data = await findAndCountAllfranelas(limit, offset, opcion, valor);
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
  return { totalItems, franelas, prev, next };
};

module.exports = {
  franelaService,
};
