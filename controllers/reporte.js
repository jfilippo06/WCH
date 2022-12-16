const { renderFacturaService } = require("../services/reporte");

const renderFacturaController = async (req, res) => {
  try {
    const data = await renderFacturaService()
    res.render("pages/reporte/factura", {data})
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/factura");
  }
};

module.exports = {
  renderFacturaController,
};
