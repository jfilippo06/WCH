const { copyFile, constants } = require('node:fs/promises')
const path = require('path');
const file = path.join(__dirname, '../database.sqlite')

const respaldarGet = async (req, res) => {
    res.render('pages/respaldar');
}

const copy = async (req, res) => {
    try {
        const {nombre} = req.body
        const dest = path.join(__dirname, `../backup/${nombre}.sqlite`)
        await copyFile(file, dest)
        req.flash("success", { msg: "Base de datos" });
        res.redirect('/mantenimiento/respaldar')
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    respaldarGet,
    copy,
}