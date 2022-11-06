const index = async (req,res) => {
    res.render('pages/index');
}

const exit = async (req,res) => {
    res.render('pages/exit');
}

module.exports = {
    index,
    exit,
}