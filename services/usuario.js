const {
  findAndCountAllUsers,
  deshabilitarUsuario,
  getUser,
  editarUser,
} = require("../DAL/usuario");
const { nextPage, prevPage } = require("../helpers/paginationTools");
const bcrypt = require('bcrypt')
const auth = require('../config/auth')

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

const editarPostService = async (id, email, userName, password, roleId) => {
  const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds))
  const hash = await bcrypt.hash(password, salt)
  await editarUser(id, email, userName, hash, roleId)
};

module.exports = {
  usuarioService,
  deshabilitarUsuarioService,
  editarGetService,
  editarPostService,
};
