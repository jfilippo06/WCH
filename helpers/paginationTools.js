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

const prevPage_2 = (location,currentPage,totalPages, size) => {
  if(currentPage > 0 && currentPage < totalPages){
      return `${process.env.BASE_URL+location}?size=${size}&page=${currentPage-1}`
  }
}

const nextPage_2 = (location,currentPage,totalPages, size) => {
  if(currentPage < (totalPages-1)){
      return `${process.env.BASE_URL+location}?size=${size}&page=${currentPage+1}`
  }
}

const prevPage_3 = (location, currentPage, totalPages, size, opcion, tipo, valor) => {
  if (currentPage > 0 && currentPage < totalPages) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage - 1
    }&opcion=${opcion}&tipo=${tipo}&valor=${valor}`;
  }
};

const nextPage_3 = (location, currentPage, totalPages, size, opcion, tipo, valor) => {
  if (currentPage < totalPages - 1) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage + 1
    }&opcion=${opcion}&tipo=${tipo}&valor=${valor}`;
  }
};

module.exports = {
  prevPage,
  nextPage,
  prevPage_2,
  nextPage_2,
  prevPage_3,
  nextPage_3,
};
