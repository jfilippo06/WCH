const { registerService, loginService } = require('../services/auth')
const AppError = require('../errors/appErrors')

const loginController = async (req,res) => {
    try {
        const {userName, password} = req.body
        const user = await loginService(userName, password)
        req.login(user, (err,) => {
            if (err) throw new AppError('Error al crear la sesion', 403)
            return res.redirect('/inventario/franela')
        })
    } catch (error) {
        req.flash('alert', {msg:error.message})
        res.redirect('/')
    }
}

const registerController = async (req, res) => {
    try {
        const {email, userName, password, roleId} = req.body
        await registerService(email, userName, password, roleId)
        req.flash('success', {msg:'Usuario registrado'})
        res.redirect('/usuario')
    } catch (error) {
        req.flash('alert', {msg:error.message})
        res.redirect('/usuario')
    }
}

const logoutController = async (req, res) => {
    req.logout(()=>{})
    res.redirect('/')
}

module.exports = {
    loginController,
    registerController,
    logoutController,
}