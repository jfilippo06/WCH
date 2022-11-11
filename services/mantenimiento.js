const path = require('path');
const { copyFile } = require('node:fs/promises')
const { registerLink } = require('../DAL/mantenimiento');

const copyController = async (link) => {
    const file = path.join(__dirname, '../database.sqlite')
    const dest = path.join(__dirname, `../backup/${link}.sqlite`)
    await registerLink(dest)
    await copyFile(file, dest)
}

module.exports = {
    copyController,
}