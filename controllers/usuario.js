const {
  usuarioService,
  deshabilitarUsuarioService,
  editarGetService,
} = require("../services/usuario");

const usuarioController = async (req, res) => {
  try {
    const { page, size } = req.query;
    const data = await usuarioService(page, size);
    const { users, prev, next } = data;
    user = req.user;
    res.render("pages/usuario", { user, users, prev, next });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/usuario");
  }
};

const deshabilitarUsuarioController = async (req, res) => {
  try {
    const { id } = req.params;
    await deshabilitarUsuarioService(id);
    req.flash("success-2", { msg: "Usuario deshabilitado" });
    res.redirect("/usuario");
  } catch (error) {
    req.flash("alert-2", { msg: error.message });
    res.redirect("/usuario");
  }
};

const editarGetController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await editarGetService(id);
    res.render('', { data:data})
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/usuario");
  }
};

module.exports = {
  usuarioController,
  deshabilitarUsuarioController,
  editarGetController,
};
