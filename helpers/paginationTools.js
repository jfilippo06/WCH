require("dotenv").config();

const prevPage = (location, currentPage, totalPages, size, opcion, valor) => {
  if (currentPage > 0 && currentPage < totalPages) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage - 1
    }&opcion=${opcion}&valor=${valor}`;
  }
};

const nextPage = (location, currentPage, totalPages, size, opcion, valor) => {
  if (currentPage < totalPages - 1) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage + 1
    }&opcion=${opcion}&valor=${valor}`;
  }
};

module.exports = {
  prevPage,
  nextPage,
};
