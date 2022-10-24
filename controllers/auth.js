const { registerService, loginService } = require('../services/auth')
const AppError = require('../errors/appErrors')

const loginRegister = async (req,res) => {
    try {
        const {userName, password} = req.body
        const user = await loginService(userName, password)
        req.login(user, (err,) => {
            if (err) throw new AppError('Error al crear la sesion', 403)
            return res.redirect('/home')
        })
    } catch (error) {
        res.status(error.code).json(error.message)
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

module.exports = {
    loginRegister,
    registerController,
}