const franelaController = async (req,res) => {
    try {
        const { page, size } = req.query;
        res.render('pages/franela');
    } catch (error) {
        req.flash("alert", { msg: error.message });
        res.redirect("/inventario/franela");
    }
}

module.exports = {
    franelaController,
}