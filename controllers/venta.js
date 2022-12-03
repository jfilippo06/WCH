const {
  buscarClienteService,
  buscarOrderService,
  registrarClienteService,
} = require("../services/venta");

const clienteRenderController = async (req, res) => {
  res.render("pages/venta/buscar-cliente");
};

const buscarClienteController = async (req, res) => {
  try {
    const { cedula } = req.body;
    const data = await buscarClienteService(cedula);
    const order = await buscarOrderService();
    if (data) {
      req.session.data = data;
      req.session.order = order;
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
  res.render("pages/venta/registrar-cliente");
};

const registrarClienteController = async (req, res) => {
  try {
    const { nombre, cedula } = req.body;
    await registrarClienteService(nombre, cedula);
    const data = await buscarClienteService(cedula);
    const order = await buscarOrderService();
    req.session.data = data;
    req.session.order = order;
    res.redirect("/venta/facturar");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta/registrar");
  }
};

const facturarRenderController = async (req, res) => {
  const { id, nombre } = req.session.data;
  const order = req.session.order;
  res.render("pages/venta/facturar");
};

module.exports = {
  clienteRenderController,
  buscarClienteController,
  registrarRenderController,
  facturarRenderController,
  registrarClienteController,
};
