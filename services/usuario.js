const {
  findAndCountAllUsers,
  deshabilitarUsuario,
  getUser,
} = require("../DAL/usuario");
const { nextPage, prevPage } = require("../helpers/paginationTools");

const usuarioService = async (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;
  const data = await findAndCountAllUsers(limit, offset);
  const { count: totalItems, rows: users } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage("usuario", currentPage, totalPages, limit);
  const prev = prevPage("usuario", currentPage, totalPages, limit);
  return { users, prev, next };
};

const deshabilitarUsuarioService = async (id) => {
  await deshabilitarUsuario(id);
};

const editarGetService = async (id) => {
  const data = await getUser(id);
  return data;
};

module.exports = {
  usuarioService,
  deshabilitarUsuarioService,
  editarGetService,
};
