const { franelaData } = require("../DAL/registro");

const getFranelaService = async (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  return await franelaData(limit, offset);
};

module.exports = {
  getFranelaService,
};
