require('dotenv').config()

module.exports = (req, res, next) => {
    if (String(req.user.RoleId) !== String(process.env.ADMIN_ROLE)) {
        return res.status(401).json("You are not authorized to perform this action!");
    }
    next();
}