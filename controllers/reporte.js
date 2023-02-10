const { gotIvaServive } = require("../services/impuesto");
const {
  renderFacturaService,
  paginationFactura,
  inventarioService,
  ventaService,
} = require("../services/reporte");

const renderFacturaController = async (req, res) => {
  try {
    const { page, size, valor } = req.query;
    const cliente = await renderFacturaService();
    const data = await paginationFactura(page, size, valor);
    const { factura, prev, next } = data;
    res.render("pages/reporte/factura", { cliente, factura, prev, next });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/factura");
  }
};

const renderInventarioController = async (req, res) => {
  try {
    const { page, size, numero } = req.query;
    const {
      franela,
      producto,
      prevFranela,
      nextFranela,
      prevProducto,
      nextProducto,
    } = await inventarioService(page, size, numero);
    res.render("pages/reporte/inventario", {
      franela,
      producto,
      prevFranela,
      nextFranela,
      prevProducto,
      nextProducto,
    });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/inventario");
  }
};

const renderVentaController = async (req, res) => {
  try {
    const { page, size, numero } = req.query;
    const { total, next, prev } = await ventaService(page, size, numero);
    const { estado } = await gotIvaServive();
    res.render("pages/reporte/venta", { total, next, prev, estado });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/venta");
  }
};

module.exports = {
  renderFacturaController,
  renderInventarioController,
  renderVentaController,
};
