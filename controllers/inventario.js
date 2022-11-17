const { franelaService } = require("../services/inventario");

const franelaController = async (req, res) => {
  try {
    const {
      page,
      size,
      tela,
      talla,
      color,
      cuello,
      manga,
      marca,
      stock,
      precio,
      observacion,
    } = req.query;
    const data = await franelaService(
      page,
      size,
      tela,
      talla,
      color,
      cuello,
      manga,
      marca,
      stock,
      precio,
      observacion
    );
    // res.render("pages/franela");
    res.json(data);
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/inventario/franela");
  }
};

module.exports = {
  franelaController,
};
