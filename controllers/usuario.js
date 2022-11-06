const { usuarioService } = require("../services/usuario");

const usuarioController = async (req,res) => {
    try {
        const {page, size} = req.query
        const data = await usuarioService(page,size)
        user = req.user
        res.render('pages/usuario', {user, data:data});
    } catch (error) {
        req.flash('alert', {msg:error.message})
        res.redirect('/usuario')
    }
}

module.exports = {
    usuarioController,
}