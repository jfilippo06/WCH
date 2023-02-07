const {
  renderFacturaService,
  paginationFactura,
  inventarioService,
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

module.exports = {
  renderFacturaController,
  renderInventarioController,
};
