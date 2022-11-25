const getFranelaService = async (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
};

module.exports = {
  getFranelaService,
};
