const AppError = require('../errors/not-found')
const {User} = require('../models')

const registerUser = async (email, userName, hash, roleId) => {
    const user = await User.findOne({
        where: {
            email: email
        }
    })
    if (user) throw new AppError('Authentication failed! Email / password does not correct.', 201);
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