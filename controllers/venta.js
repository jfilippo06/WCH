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
      
    }
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta");
  }
};

module.exports = {
  clienteRenderController,
  buscarClienteController,
};
