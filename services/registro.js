const { franelaData } = require("../DAL/registro");
const { nextPage_2, prevPage_2 } = require("../helpers/paginationTools");

const getFranelaService = async (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  const data = await franelaData(limit, offset);
  const { count: totalItems, rows: franelas } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage_2("registro/franela", currentPage, totalPages, limit);
  const prev = prevPage_2("registro/franela", currentPage, totalPages, limit);
  return { totalItems, franelas, prev, next };
};

module.exports = {
  getFranelaService,
};
