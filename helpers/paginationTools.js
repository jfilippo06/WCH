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

const prevPage_2 = (location, currentPage, totalPages, size) => {
  if (currentPage > 0 && currentPage < totalPages) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage - 1
    }`;
  }
};

const nextPage_2 = (location, currentPage, totalPages, size) => {
  if (currentPage < totalPages - 1) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage + 1
    }`;
  }
};

const prevPage_3 = (
  location,
  currentPage,
  totalPages,
  size,
  opcion,
  tipo,
  valor
) => {
  if (currentPage > 0 && currentPage < totalPages) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage - 1
    }&opcion=${opcion}&tipo=${tipo}&valor=${valor}`;
  }
};

const nextPage_3 = (
  location,
  currentPage,
  totalPages,
  size,
  opcion,
  tipo,
  valor
) => {
  if (currentPage < totalPages - 1) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage + 1
    }&opcion=${opcion}&tipo=${tipo}&valor=${valor}`;
  }
};

const prevPage_4 = (location, currentPage, totalPages, size, valor) => {
  if (currentPage > 0 && currentPage < totalPages) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage - 1
    }&valor=${valor}`;
  }
};

const nextPage_4 = (location, currentPage, totalPages, size, valor) => {
  if (currentPage < totalPages - 1) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage + 1
    }&valor=${valor}`;
  }
};

const prevPage_5 = (location, currentPage, totalPages, size, numero) => {
  if (currentPage > 0 && currentPage < totalPages) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage - 1
    }&numero=${numero}`;
  }
};

const nextPage_5 = (location, currentPage, totalPages, size, numero) => {
  if (currentPage < totalPages - 1) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage + 1
    }&numero=${numero}`;
  }
};

const prevPage_6 = (
  location,
  currentPage,
  totalPages,
  size,
  numero,
  inicio,
  final
) => {
  if (currentPage > 0 && currentPage < totalPages) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage - 1
    }&numero=${numero}&inicio=${inicio}&final=${final}`;
  }
};

const nextPage_6 = (
  location,
  currentPage,
  totalPages,
  size,
  numero,
  inicio,
  final
) => {
  if (currentPage < totalPages - 1) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage + 1
    }&numero=${numero}&inicio=${inicio}&final=${final}`;
  }
};

const prevPage_7 = (
  location,
  currentPage,
  totalPages,
  size,
  cedula,
  inicio,
  final
) => {
  if (currentPage > 0 && currentPage < totalPages) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage - 1
    }&cedula=${cedula}&inicio=${inicio}&final=${final}`;
  }
};

const nextPage_7 = (
  location,
  currentPage,
  totalPages,
  size,
  cedula,
  inicio,
  final
) => {
  if (currentPage < totalPages - 1 && inicio === undefined) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage + 1
    }&cedula=&inicio=&final=`;
  } else if (currentPage < totalPages - 1) {
    return `${process.env.BASE_URL + location}?size=${size}&page=${
      currentPage + 1
    }&cedula=${cedula}&inicio=${inicio}&final=${final}`;
  }
};

module.exports = {
  prevPage,
  nextPage,
  prevPage_2,
  nextPage_2,
  prevPage_3,
  nextPage_3,
  prevPage_4,
  nextPage_4,
  prevPage_5,
  nextPage_5,
  prevPage_6,
  nextPage_6,
  prevPage_7,
  nextPage_7,
};
