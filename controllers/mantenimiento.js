const {
  copyController,
  respaldarController,
  restaurarController,
} = require("../services/mantenimiento");

const respaldarGet = async (req, res) => {
  try {
    const { page, size } = req.query;
    const data = await respaldarController(page, size);
    const { link, prev, next } = data;
    res.render("pages/respaldar", { link, prev, next });
  } catch (error) {
    req.flash("alert-2", { msg: error.message });
    res.redirect("/mantenimiento/respaldar");
  }
};

const copy = async (req, res) => {
  try {
    const { nombre } = req.body;
    await copyController(nombre);
    req.flash("success", { msg: "Base de datos respaldada" });
    res.redirect("/mantenimiento/respaldar");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/mantenimiento/respaldar");
  }
};

const restaurarGet = async (req, res) => {
  try {
    const { page, size } = req.query;
    const data = await restaurarController(page, size);
    const { link, prev, next } = data;
    res.render("pages/restaurar", { link, prev, next });
    res.json(data)
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/mantenimiento/restaurar");
  }
};

module.exports = {
  respaldarGet,
  copy,
  restaurarGet,
};
