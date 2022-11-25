const getFranela = async (req, res) => {
    try {
        const { page, size, opcion, valor } = req.query;
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    getFranela,
}