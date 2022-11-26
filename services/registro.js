const {
  franelaData,
  franelaRestore,
  productoData,
  productoRestore,
  usuarioData,
  usuarioRestore,
} = require("../DAL/registro");
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

const habilitarFranelaService = async (id) => {
  await franelaRestore(id);
};

const getProductoService = async (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  const data = await productoData(limit, offset);
  const { count: totalItems, rows: productos } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage_2("registro/producto", currentPage, totalPages, limit);
  const prev = prevPage_2("registro/producto", currentPage, totalPages, limit);
  return { totalItems, productos, prev, next };
};

const habilitarProductoService = async (id) => {
  await productoRestore(id);
};

const getUsuarioService = async (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  const data = await usuarioData(limit, offset);
  const { count: totalItems, rows: usuarios } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage_2("registro/usuario", currentPage, totalPages, limit);
  const prev = prevPage_2("registro/usuario", currentPage, totalPages, limit);
  return { totalItems, usuarios, prev, next };
};

const habilitarUsuarioService = async (id) => {
  await usuarioRestore(id)
};

module.exports = {
  getFranelaService,
  habilitarFranelaService,
  getProductoService,
  habilitarProductoService,
  getUsuarioService,
  habilitarUsuarioService,
};
