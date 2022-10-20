const bcrypt = require('bcrypt')
const auth = require('../config/auth')
const { registerUser } = require('../DAL/auth')

const registerService = async (email, userName, password, roleId) => {
    const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds))
    const hash = await bcrypt.hash(password, salt)
    const data = await registerUser(email, userName, hash, roleId)
    return data
}

module.exports = {
    registerService,
}