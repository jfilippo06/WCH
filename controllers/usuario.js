const {
  usuarioService,
  deshabilitarUsuarioService,
  editarGetService,
  editarPostService,
} = require("../services/usuario");

const usuarioController = async (req, res) => {
  try {
    const { page, size } = req.query;
    const data = await usuarioService(page, size);
    const { users, prev, next } = data;
    res.render("pages/configuracion/usuario", { users, prev, next });
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
    res.render("pages/configuracion/editar", { data });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/usuario/editar");
  }
};

const editarPostController = async (req, res) => {
  try {
    const {email, userName, password, roleId} = req.body
    const { id } = req.params;
    await editarPostService(id, email, userName, password, roleId)
    req.flash("success-2", { msg: "Usuario actualizado" });
    res.redirect("/usuario");
  } catch (error) {
    req.flash("alert-2", { msg: error.message });
    res.redirect("/usuario");
  }
};

module.exports = {
  usuarioController,
  deshabilitarUsuarioController,
  editarGetController,
  editarPostController,
};
