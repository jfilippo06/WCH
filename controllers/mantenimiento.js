const {
  copyController,
  respaldarController,
} = require("../services/mantenimiento");

const respaldarGet = async (req, res) => {
  try {
    const { page, size } = req.query;
    const data = await respaldarController(page, size);
    const { link, prev, next } = data;
    res.render("pages/respaldar", { link, prev, next });
  } catch (error) {
    req.flash("alert-2", { msg: error.message });
    res.redirect("/usuario");
  }
};

const copy = async (req, res) => {
  try {
    const { link } = req.body;
    await copyController(link);
    req.flash("success", { msg: "Base de datos respaldada" });
    res.redirect("/mantenimiento/respaldar");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/mantenimiento/respaldar");
  }
};

module.exports = {
  respaldarGet,
  copy,
};
