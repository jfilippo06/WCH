const homeLogin = async (req,res) => {
    res.render('index');
}

const homeIndex = async (req,res) => {
    user = req.user
    res.render('home', {user});
}

const logout = async (req, res) => {
    req.logout(()=>{})
    res.redirect('/')
}

module.exports = {
    homeLogin,
    homeIndex,
    logout,
}