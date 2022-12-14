const {
  copyController,
  respaldarController,
  restaurarController,
  pasteController,
  compactarController,
} = require("../services/mantenimiento");

const respaldarGet = async (req, res) => {
  try {
    const { page, size } = req.query;
    const data = await respaldarController(page, size);
    const { link, prev, next } = data;
    res.render("pages/mantenimiento/respaldar", { link, prev, next });
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
    res.render("pages/mantenimiento/restaurar", { link, prev, next });
    res.json(data);
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/mantenimiento/restaurar");
  }
};

const paste = async (req, res) => {
  try {
    const { id } = req.params;
    await pasteController(id);
    req.flash("success", { msg: "Base de datos restaurada" });
    res.redirect("/mantenimiento/restaurar");
    // res.json(data)
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/mantenimiento/restaurar");
  }
};

const compactar = async (req, res) => {
  res.render("pages/mantenimiento/compactar");
};

const compactarGet = async (req, res) => {
  try {
    await compactarController();
    req.flash("success", { msg: "Base de datos compactada" });
    res.redirect("/mantenimiento/compactar");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/mantenimiento/compactar");
  }
};

module.exports = {
  respaldarGet,
  copy,
  restaurarGet,
  paste,
  compactar,
  compactarGet,
};
