const { renderFacturaService, paginationFactura } = require("../services/reporte");

const renderFacturaController = async (req, res) => {
  try {
    const { page, size, valor } = req.query;
    const cliente = await renderFacturaService( page, size, valor );
    const data = await paginationFactura();
    const {factura, prev, next} = data;
    res.render("pages/reporte/factura", { cliente, factura });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/factura");
  }
};

module.exports = {
  renderFacturaController,
};
