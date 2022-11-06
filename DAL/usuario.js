const {User} = require('../models')

const findAndCountAllUsers = async (limit,offset) => {
    const data = await User.findAndCountAll({
        attributes: {
            exclude: [ 'password', 'createdAt', 'updatedAt', 'deletedAt' ]
        },
        limit: limit,
        offset: offset,
    })
    return data
}

module.exports = {
    findAndCountAllUsers,
}