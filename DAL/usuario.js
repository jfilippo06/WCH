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

const getUser = async (id) => {
    const data = await User.findOne({
        where: {
            id: id
        },
        attributes: {
            exclude: [ 'password', 'createdAt', 'updatedAt', 'deletedAt' ]
        },
    })
    return data
}

const editarUser = async (id, email, userName, hash, roleId) => {
    await User.update(
        {
            email: email,
            userName: userName,
            password: hash,
            RoleId: roleId,
        },
        {
            where: {
                id: id
            },
        }
    )
}

module.exports = {
    findAndCountAllUsers,
    deshabilitarUsuario,
    getUser,
    editarUser,
}