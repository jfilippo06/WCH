const AppError = require("../errors/appErrors");
const { Backup } = require("../models");

const registerLink = async (nombre, dest) => {
  const data = await Backup.findOne({
    where: {
      link: dest,
    },
  });
  if (data) throw new AppError("Base de datos ya existe", 200);
  await Backup.create({
    name: nombre,
    link: dest,
  });
};

const findAndCountAllLink = async (limit, offset) => {
  const data = await Backup.findAndCountAll({
    attributes: {
      exclude: ["updatedAt"],
    },
    limit: limit,
    offset: offset,
  });
  return data;
};

const getLink = async (id) => {
  const data = await Backup.findOne({
    where: {
      id: id,
    },
    attributes: {
      exclude: ["id", "name", "createdAt", "updatedAt"],
    },
  });
  return data;
};

const compactarDAL = async () => {
  
};

module.exports = {
  registerLink,
  findAndCountAllLink,
  getLink,
  compactarDAL,
};
