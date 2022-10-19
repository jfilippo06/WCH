const homeIndex = async (req,res) => {
    res.render('index', { title: 'Express' });
}

module.exports = {
    homeIndex,
}