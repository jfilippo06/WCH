const { registerService, loginService } = require('../services/auth')
const AppError = require('../errors/appErrors')

const loginController = async (req,res) => {
    try {
        const {userName, password} = req.body
        const user = await loginService(userName, password)
        req.login(user, (err,) => {
            if (err) throw new AppError('Error al crear la sesion', 403)
            return res.redirect('/home')
        })
    } catch (error) {
        req.flash('messages', {msg:error.message})
        res.redirect('/')
    }
}

const registerController = async (req, res) => {
    try {
        const {email, userName, password, roleId} = req.body
        const data = await registerService(email, userName, password, roleId)
        res.status(201).json(data)
    } catch (error) {
        res.status(error.code).json(error.message)
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