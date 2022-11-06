const { findAndCountAllUsers } = require("../DAL/usuario")
const { nextPage, prevPage } = require("../helpers/paginationTools")

const usuarioService = async (page,size) => {
    const limit = size ? +size : 5
    const offset = page ? page * limit : 0
    const data = await findAndCountAllUsers(limit,offset)
    const { count: totalItems, rows: users } = data
    const currentPage = page ? +page: 0
    const totalPages = Math.ceil(totalItems / limit)
    const next = nextPage('usuario', currentPage, totalPages, size)
    const prev = prevPage('usuario', currentPage, totalPages, size)
    return { users, prev, next }
}

module.exports = {
    usuarioService,
}