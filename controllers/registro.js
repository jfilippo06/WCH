const { getFranelaService, habilitarFranelaService } = require("../services/registro");

const getFranelaController = async (req, res) => {
  try {
    const { page, size } = req.query;
    const data = await getFranelaService(page, size);
    const { totalItems, franelas, prev, next } = data;
    res.render("pages/registro/franela", { totalItems, franelas, prev, next });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/registro/franela");
  }
};

const habilitarFranelaController = async (req, res) => {
  try {
    const { id } = req.params;
    await habilitarFranelaService(id)
    req.flash("success", { msg: "Registro habilitada" });
    res.redirect("/registro/franela");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/registro/franela");
  }
};

module.exports = {
  getFranelaController,
  habilitarFranelaController,
};
