const bcrypt = require('bcrypt')
const auth = require('../config/auth')
const { registerUser, loginUser } = require('../DAL/auth')

const loginService = async (userName, password) => {
    const data = await loginUser(userName, password)
    return data
}

const registerService = async (email, userName, password, roleId) => {
    const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds))
    const hash = await bcrypt.hash(password, salt)
    await registerUser(email, userName, hash, roleId)
}

module.exports = {
    loginService,
    registerService,
}