const { registerService } = require('../services/auth')

const registerController = async (req, res) => {
    try {
        const {email, userName, password, roleId} = req.body
        const data = await registerService(email, userName, password, roleId)
        return res.status(201).json(data)
    } catch (err) {
        res.status(err.code).json(err.message)
    }
}

module.exports = {
    registerController,
}