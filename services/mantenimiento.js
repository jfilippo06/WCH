const path = require("path");
const { copyFile } = require("node:fs/promises");
const { registerLink, findAndCountAllLink, getLink } = require("../DAL/mantenimiento");
const { nextPage, prevPage } = require("../helpers/paginationTools");

const copyController = async (nombre) => {
  const file = path.join(__dirname, "../database.sqlite");
  const dest = path.join(__dirname, `../backup/${nombre}.sqlite`);
  await registerLink(nombre, dest);
  await copyFile(file, dest);
};

const respaldarController = async (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;
  const data = await findAndCountAllLink(limit, offset);
  const { count: totalItems, rows: link } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage(
    "mantenimiento/respaldar",
    currentPage,
    totalPages,
    limit
  );
  const prev = prevPage(
    "mantenimiento/respaldar",
    currentPage,
    totalPages,
    limit
  );
  return { link, prev, next };
};

const restaurarController = async (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;
  const data = await findAndCountAllLink(limit, offset);
  const { count: totalItems, rows: link } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage(
    "mantenimiento/restaurar",
    currentPage,
    totalPages,
    limit
  );
  const prev = prevPage(
    "mantenimiento/restaurar",
    currentPage,
    totalPages,
    limit
  );
  return { link, prev, next };
};

const pasteController = async (id) => {
  const data = await getLink(id)
  const {link} = data
  const dest = path.join(__dirname, "../database.sqlite");
  await copyFile(link, dest);
  
};

module.exports = {
  copyController,
  respaldarController,
  restaurarController,
  pasteController,
};
