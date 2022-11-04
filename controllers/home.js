const homeLogin = async (req,res) => {
    res.render('pages/index');
}

const homeIndex = async (req,res) => {
    user = req.user
    res.render('pages/home', {user});
}

module.exports = {
    homeLogin,
    homeIndex,
}