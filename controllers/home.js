const homeLogin = async (req,res) => {
    res.render('index');
}

const homeIndex = async (req,res) => {
    user = req.user
    res.render('home', {user});
}

module.exports = {
    homeLogin,
    homeIndex,
}