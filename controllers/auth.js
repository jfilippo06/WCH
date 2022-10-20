const { registerService } = require("../services/auth")

const registerController = async (req,res) => {
    const {email, userName, password, roleId} = req.body
    const data = await registerService(email, userName, password, roleId)
    return res.status(201).json(data)
}

module.exports = {
    registerController,
}