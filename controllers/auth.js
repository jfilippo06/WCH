const { registerService, loginService } = require('../services/auth')

const loginRegister = async (req,res) => {
    try {
        const {userName, password} = req.body
        const data = await loginService(userName, password)
        res.status(200).json(data)
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