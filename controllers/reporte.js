const { renderFacturaService, paginationFactura } = require("../services/reporte");

const renderFacturaController = async (req, res) => {
  try {
    const { page, size, valor } = req.query;
    const cliente = await renderFacturaService();
    const data = await paginationFactura( page, size, valor );
    const {factura, prev, next} = data;
    res.render("pages/reporte/factura", { cliente, factura, prev, next });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/factura");
  }
};

module.exports = {
  renderFacturaController,
};
