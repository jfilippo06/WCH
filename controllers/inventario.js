const inventarioController = async (req,res) => {
    user = req.user
    res.render('pages/inventario', {user});
}

module.exports = {
    inventarioController,
}