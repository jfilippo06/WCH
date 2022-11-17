const { Franela } = require("../models");

const findAndCountAllfranelas = async (limit, offset) => {
  const data = await Franela.findAndCountAll({
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
    limit: limit,
    offset: offset,
  });
  return data;
};

module.exports = {
  findAndCountAllfranelas,
};
