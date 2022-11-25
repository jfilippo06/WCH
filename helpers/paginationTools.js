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

module.exports = {
  prevPage,
  nextPage,
  prevPage_2,
  nextPage_2,
};
