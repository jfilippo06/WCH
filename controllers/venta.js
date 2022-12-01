const { buscarClienteService } = require("../services/venta");

const clienteRenderController = async (req, res) => {
  res.render("pages/venta/buscar-cliente");
};

const buscarClienteController = async (req, res) => {
  try {
    const { cedula } = req.body;
    const data = await buscarClienteService(cedula);
    if (data) {
      
    } else {
      req.flash("alert", { msg: "Cliente no existe" });
      res.redirect("/venta/registrar");      
    }
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta");
  }
};

const registrarRenderController = async (req, res) => {
  res.render("pages/venta/buscar-registrar")
};

module.exports = {
  clienteRenderController,
  buscarClienteController,
  registrarRenderController,
};
