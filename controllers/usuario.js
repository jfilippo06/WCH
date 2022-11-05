const usuarioController = async (req,res) => {
    user = req.user
    res.render('pages/usuario', {user});
}

module.exports = {
    usuarioController,
}