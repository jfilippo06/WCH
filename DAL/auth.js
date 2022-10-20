const {User} = require('../models')

const registerUser = async (email, userName, hash, roleId) => {
    const user = await User.findOne({
        where: {
            email: email
        }
    })
    if (user) throw new Error('Usuario ya existe')
    const data = await User.create({
        email,
        userName,
        password: hash,
        roleId,
    })
    return data
}

module.exports = {
    registerUser,
}