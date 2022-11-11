const AppError = require('../errors/appErrors')
const {Backup} = require('../models')

const registerLink = async (dest) => {
    const data = await Backup.findOne({
        where: {
            link: dest
        }
    })
    if (data) throw new AppError('Base de datos ya existe', 200);
    await Backup.create({
        link: dest
    })
}

module.exports = {
    registerLink,
}