const {
  activarService,
  desactivarServive,
  gotIvaServive,
  actualizarService,
} = require("../services/impuesto");

const renderIvaController = async (req, res) => {
  const data = await gotIvaServive();
  const { nombre, valor, estado } = data;
  res.render("pages/configuracion/impuesto", { nombre, valor, estado });
};

const activarController = async (req, res) => {
  try {
    await activarService();
    req.flash("success", { msg: "IVA activado correctamente" });
    res.redirect("/impuesto");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/impuesto");
  }
};

const desactivarController = async (req, res) => {
  try {
    await desactivarServive();
    req.flash("success", { msg: "IVA desactivado correctamente" });
    res.redirect("/impuesto");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/impuesto");
  }
};

const actualizarController = async (req, res) => {
  try {
    const { nombre, valor } = req.body;
    await actualizarService(nombre, valor);
    req.flash("success", { msg: "Datos actualizados correctamente" });
    res.redirect("/impuesto");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/impuesto");
  }
};

module.exports = {
  renderIvaController,
  activarController,
  desactivarController,
  actualizarController,
};
