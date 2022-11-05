const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const {msg} = errors.array()[0]
        req.flash('alert', {msg:msg})
        return res.redirect('/')
    }
    next()
}
