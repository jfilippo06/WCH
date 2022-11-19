const {
  franelaService,
  productoService,
  deshabilitarFranelaService,
  deshabilitarProductoService,
} = require("../services/inventario");

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

const deshabilitarFranelaController = async (req, res) => {
  try {
    const { id } = req.params;
    await deshabilitarFranelaService(id);
    req.flash("success", { msg: "Franela deshabilitada" });
    res.redirect("/inventario/franela");
    res.json(id);
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/inventario/franela");
  }
};

const deshabilitarProductoController = async (req, res) => {
  try {
    const { id } = req.params;
    await deshabilitarProductoService(id)
    req.flash("success", { msg: "Producto deshabilitado" });
    res.redirect("/inventario/producto");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/inventario/producto");
  }
};

module.exports = {
  franelaController,
  productoController,
  deshabilitarFranelaController,
  deshabilitarProductoController,
};
