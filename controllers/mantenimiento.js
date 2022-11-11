const { copyController } = require('../services/mantenimiento');

const respaldarGet = async (req, res) => {
    res.render('pages/respaldar');
}

const copy = async (req, res) => {
    try {
        const {link} = req.body
        await copyController(link)
        req.flash("success", { msg: "Base de datos respaldada" });
        res.redirect('/mantenimiento/respaldar')
    } catch (error) {
        req.flash("alert", { msg: error.message });
        res.redirect("/mantenimiento/respaldar");
    }
}

module.exports = {
    respaldarGet,
    copy,
}