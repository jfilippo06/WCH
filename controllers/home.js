const index = async (req,res) => {
    res.render('pages/index');
}

const exit = async (req,res) => {
    res.render('pages/salir/exit');
}

module.exports = {
    index,
    exit,
}