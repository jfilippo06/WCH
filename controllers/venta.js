const { buscarClienteService } = require("../services/venta");

const clienteRenderController = async (req, res) => {
  res.render("pages/venta/buscar-cliente");
};

const buscarClienteController = async (req, res) => {
  try {
    const { cedula } = req.body;
    const data = await buscarClienteService(cedula);
    if (data) {
      res.redirect("/venta/facturar");      
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
  res.render("pages/venta/registrar-cliente")
};

const facturarRenderController = async (req, res) => {
  res.render("pages/venta/facturar")
};

module.exports = {
  clienteRenderController,
  buscarClienteController,
  registrarRenderController,
  facturarRenderController,
};
