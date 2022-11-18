const { Franela } = require("../models");

const findAndCountAllfranelas = async (limit, offset, opcion, valor) => {
  if (opcion == 'tela') {
    const data = await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        tela: valor
      },
      limit: limit,
      offset: offset,
    });
    return data;
  } 
  if (opcion == 'talla') {
    const data = await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        talla: valor
      },
      limit: limit,
      offset: offset,
    });
    return data;
  }
  if (opcion == 'color') {
    const data = await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        color: valor
      },
      limit: limit,
      offset: offset,
    });
    return data;
  }
  if (opcion == 'cuello') {
    const data = await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        cuello: valor
      },
      limit: limit,
      offset: offset,
    });
    return data;
  }
  if (opcion == 'manga') {
    const data = await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        manga: valor
      },
      limit: limit,
      offset: offset,
    });
    return data;
  }
  if (opcion == 'marca') {
    const data = await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        marca: valor
      },
      limit: limit,
      offset: offset,
    });
    return data;
  }
  if (opcion == 'stock') {
    const data = await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        stock: valor
      },
      limit: limit,
      offset: offset,
    });
    return data;
  }
  if (opcion == 'precio') {
    const data = await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        precio: valor
      },
      limit: limit,
      offset: offset,
    });
    return data;
  }
  else {
    const data = await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      limit: limit,
      offset: offset,
    });
    return data;
  }
};

module.exports = {
  findAndCountAllfranelas,
};
