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

const deshabilitarUsuario = async (id) => {
    await User.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    findAndCountAllUsers,
    deshabilitarUsuario,
}