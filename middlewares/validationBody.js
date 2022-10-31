const { body } = require("express-validator");

const bodyLogin = [
    body("userName", "Introduzca un nombre de usuario valido").trim().notEmpty().escape(),
    body("password", "Introduzca un minimo de 5 caracteres").trim().isLength({ min: 5 }).escape(),
];

const bodyRegister = [
    body('email', 'Email required').normalizeEmail().not().isEmpty(),
    body("userName", "Enter a valid userName!").trim().notEmpty().escape(),
    body("password", "Enter a valid password!").trim().isLength({ min: 5 }).escape(),
    body("roleId", "Enter a valid roleId!").trim().notEmpty().escape(),
];

module.exports = {
    bodyLogin,
    bodyRegister,
}