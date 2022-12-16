const { findAllClient } = require("../DAL/reporte");

const renderFacturaService = async () => {
    return await findAllClient()
};

module.exports = {
  renderFacturaService,
};
