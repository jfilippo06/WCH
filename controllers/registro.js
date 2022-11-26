const {
  getFranelaService,
  habilitarFranelaService,
  getProductoService,
  habilitarProductoService,
  getUsuarioService,
  habilitarUsuarioService,
} = require("../services/registro");

const getFranelaController = async (req, res) => {
  try {
    const { page, size } = req.query;
    const data = await getFranelaService(page, size);
    const { totalItems, franelas, prev, next } = data;
    res.render("pages/registro/franela", { totalItems, franelas, prev, next });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/registro/franela");
  }
};

const habilitarFranelaController = async (req, res) => {
  try {
    const { id } = req.params;
    await habilitarFranelaService(id);
    req.flash("success", { msg: "Registro habilitado" });
    res.redirect("/registro/franela");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/registro/franela");
  }
};

const getProductoController = async (req, res) => {
  try {
    const { page, size } = req.query;
    const data = await getProductoService(page, size);
    const { totalItems, productos, prev, next } = data;
    res.render("pages/registro/producto", {
      totalItems,
      productos,
      prev,
      next,
    });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/registro/producto");
  }
};

const habilitarProductoController = async (req, res) => {
  try {
    const { id } = req.params;
    await habilitarProductoService(id)
    req.flash("success", { msg: "Registro habilitado" });
    res.redirect("/registro/producto");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/registro/producto");
  }
};

const getUsuarioController = async (req, res) => {
  try {
    const { page, size } = req.query;
    const data = await getUsuarioService(page, size)
    const { totalItems, usuarios, prev, next } = data;
    res.render("pages/registro/usuario", { totalItems, usuarios, prev, next });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/registro/usuario");
  }
}

const habilitarUsuarioController = async (req, res) => {
  try {
    const { id } = req.params;
    await habilitarUsuarioService(id)
    req.flash("success", { msg: "Registro habilitado" });
    res.redirect("/registro/usuario");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/registro/usuario");
  }
}

module.exports = {
  getFranelaController,
  habilitarFranelaController,
  getProductoController,
  habilitarProductoController,
  getUsuarioController,
  habilitarUsuarioController,
};
