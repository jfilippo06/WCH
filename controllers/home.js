const index = async (req,res) => {
    res.render('pages/index');
}

const exit = async (req,res) => {
    res.render('pages/exit/exit');
}

module.exports = {
    index,
    exit,
}