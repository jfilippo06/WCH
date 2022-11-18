const { franelaService, productoService } = require("../services/inventario");

const franelaController = async (req, res) => {
  try {
    const { page, size, opcion, valor } = req.query;
    const data = await franelaService(page, size, opcion, valor);
    const { totalItems, franelas, prev, next, stock } = data;
    res.render("pages/franela", { totalItems, franelas, prev, next, stock });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/inventario/franela");
  }
};

const productoController = async (req, res) => {
  try {
    const { page, size, opcion, valor } = req.query;
    const data = await productoService(page, size, opcion, valor);
    const { totalItems, productos, prev, next, cantidad } = data;
    res.render("pages/producto", {
      totalItems,
      productos,
      prev,
      next,
      cantidad,
    });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/inventario/producto");
  }
};

module.exports = {
  franelaController,
  productoController,
};
