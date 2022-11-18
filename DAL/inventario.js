const { Franela } = require("../models");

const findAndCountAllfranelas = async (limit, offset, opcion, valor) => {
  if (opcion == "tela") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        tela: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "talla") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        talla: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "color") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        color: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "cuello") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        cuello: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "manga") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        manga: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "marca") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        marca: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "stock") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        stock: valor,
      },
      limit: limit,
      offset: offset,
    });
  }
  if (opcion == "precio") {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      where: {
        precio: valor,
      },
      limit: limit,
      offset: offset,
    });
  } else {
    return await Franela.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      limit: limit,
      offset: offset,
    });
  }
};

const sumStock = async (opcion, valor) => {
  if (opcion == "tela") {
    return await Franela.sum("stock", {
      where: {
        tela: valor,
      },
    });
  }
  if (opcion == "talla") {
    return await Franela.sum("stock", {
      where: {
        talla: valor,
      },
    });
  }
  if (opcion == "color") {
    return await Franela.sum("stock", {
      where: {
        color: valor,
      },
    });
  }
  if (opcion == "cuello") {
    return await Franela.sum("stock", {
      where: {
        cuello: valor,
      },
    });
  }
  if (opcion == "manga") {
    return await Franela.sum("stock", {
      where: {
        manga: valor,
      },
    });
  }
  if (opcion == "marca") {
    return await Franela.sum("stock", {
      where: {
        marca: valor,
      },
    });
  }
  if (opcion == "tela") {
    return await Franela.sum("stock", {
      stock: {
        stock: valor,
      },
    });
  }
  if (opcion == "precio") {
    return await Franela.sum("stock", {
      where: {
        precio: valor,
      },
    });
  }
  else {
    return await Franela.sum("stock");
  }
};

module.exports = {
  findAndCountAllfranelas,
  sumStock,
};
