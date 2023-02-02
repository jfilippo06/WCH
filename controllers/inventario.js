const {
  franelaService,
  productoService,
  deshabilitarFranelaService,
  deshabilitarProductoService,
  registrarFranelaService,
  registrarProductoService,
  idFranela,
  idProducto,
  editFranela,
  editProducto,
} = require("../services/inventario");

const franelaController = async (req, res) => {
  try {
    const { page, size, opcion, valor } = req.query;
    const data = await franelaService(page, size, opcion, valor);
    const { totalItems, franelas, prev, next, stock } = data;
    res.render("pages/inventario/franela", {
      totalItems,
      franelas,
      prev,
      next,
      stock,
    });
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
    res.render("pages/inventario/producto", {
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
    await deshabilitarProductoService(id);
    req.flash("success", { msg: "Producto deshabilitado" });
    res.redirect("/inventario/producto");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/inventario/producto");
  }
};

const registroController = async (req, res) => {
  res.render("pages/inventario/registrar-inventario");
};

const registroFranelaController = async (req, res) => {
  try {
    const { codigo, tela, talla, color, cuello, manga, marca, stock, precio } =
      req.body;
    await registrarFranelaService(
      codigo,
      tela,
      talla,
      color,
      cuello,
      manga,
      marca,
      stock,
      precio
    );
    req.flash("success", { msg: "Franela registrada" });
    res.redirect("/inventario/registro");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/inventario/registro");
  }
};

const registroProductoController = async (req, res) => {
  try {
    const { codigo, producto, tipo, color, cantidad, precio } = req.body;
    await registrarProductoService(
      codigo,
      producto,
      tipo,
      color,
      cantidad,
      precio
    );
    req.flash("success-2", { msg: "Producto registrado" });
    res.redirect("/inventario/registro");
  } catch (error) {
    req.flash("alert-2", { msg: error.message });
    res.redirect("/inventario/registro");
  }
};

const franelaEditarGetController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await idFranela(id);
    res.render("pages/inventario/editar-franela", { data });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/inventario/franela");
  }
};

const productoEditarGetController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await idProducto(id);
    res.render("pages/inventario/editar-producto", { data });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/inventario/producto");
  }
};

const franelaEditarPostController = async (req, res) => {
  try {
    const { stock, precio } = req.body;
    const { id } = req.params;
    await editFranela(id, stock, precio);
    req.flash("success", { msg: "Registro actualizado" });
    res.redirect("/inventario/franela");
  } catch (error) {
    const { id } = req.params;
    req.flash("alert", { msg: error.message });
    res.redirect(`/inventario/franela/editar/${id}`);
  }
};

const productoEditarPostController = async (req, res) => {
  try {
    const { cantidad, precio } = req.body;
    const { id } = req.params;
    await editProducto(id, cantidad, precio);
    req.flash("success", { msg: "Registro actualizado" });
    res.redirect("/inventario/producto");
  } catch (error) {
    const { id } = req.params;
    req.flash("alert", { msg: error.message });
    res.redirect(`/inventario/producto/editar/${id}`);
  }
};

module.exports = {
  franelaController,
  productoController,
  deshabilitarFranelaController,
  deshabilitarProductoController,
  registroController,
  registroFranelaController,
  registroProductoController,
  franelaEditarGetController,
  productoEditarGetController,
  franelaEditarPostController,
  productoEditarPostController,
};
