const { getFranelaService } = require("../services/registro");

const getFranelaController = async (req, res) => {
  try {
    const { page, size, opcion, valor } = req.query;
    const data = await getFranelaService(page, size);
    res.json(data)
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  getFranelaController,
};
