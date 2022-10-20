const bodyAuth = [
    body("userName", "Enter a valid userName!").trim().notEmpty().escape(),
    body("password", "Enter a valid password!").trim().isLength({ min: 5 }).escape(),
];

module.exports = {
    bodyAuth,
}