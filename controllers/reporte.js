const { gotIvaServive } = require("../services/impuesto");
const {
  renderFacturaService,
  paginationFactura,
  inventarioService,
  ventaService,
  obtenerTotalServirce,
  clienteService,
} = require("../services/reporte");
const ejs = require("ejs");
const pdf = require("html-pdf");
const path = require("path");

const renderFacturaController = async (req, res) => {
  try {
    const { page, size, valor } = req.query;
    const cliente = await renderFacturaService();
    const data = await paginationFactura(page, size, valor);
    const { factura, prev, next } = data;
    res.render("pages/reporte/factura", { cliente, factura, prev, next });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/factura");
  }
};

const renderInventarioController = async (req, res) => {
  try {
    const { page, size, numero, inicio, final } = req.query;
    const {
      franela,
      producto,
      prevFranela,
      nextFranela,
      prevProducto,
      nextProducto,
    } = await inventarioService(page, size, numero, inicio, final);
    req.session.franela = franela;
    req.session.producto = producto;
    req.session.inicio = inicio;
    req.session.final = final;
    res.render("pages/reporte/inventario", {
      franela,
      producto,
      prevFranela,
      nextFranela,
      prevProducto,
      nextProducto,
    });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/inventario");
  }
};

const renderVentaController = async (req, res) => {
  try {
    const { page, size, numero, inicio, final } = req.query;
    const { total, next, prev } = await ventaService(
      page,
      size,
      numero,
      inicio,
      final
    );
    const { estado } = await gotIvaServive();
    const data = await obtenerTotalServirce(inicio, final);
    req.session.total = total;
    req.session.data = data;
    req.session.inicio = inicio;
    req.session.final = final;
    req.session.estado = estado;
    res.render("pages/reporte/venta", { total, next, prev, estado, data });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/venta");
  }
};

const renderClienteController = async (req, res) => {
  try {
    const { page, size, cedula, inicio, final } = req.query;
    const { cliente, prev, next } = await clienteService(
      page,
      size,
      cedula,
      inicio,
      final
    );
    req.session.cliente = cliente;
    req.session.inicio = inicio;
    req.session.final = final;
    res.render("pages/reporte/cliente", { cliente, prev, next });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/cliente");
  }
};

const clienteReporteController = async (req, res) => {
  try {
    const cliente = req.session.cliente;
    const inicio = req.session.inicio;
    const final = req.session.final;
    ejs.renderFile(
      path.join(__dirname, `../views/recibos/`, "cliente.ejs"),
      { cliente, inicio, final },
      (err, data) => {
        if (err) {
          req.flash("alert", { msg: error.message });
          res.redirect("/reporte/cliente");
        } else {
          pdf.create(data).toStream((err, stream) => {
            if (err) {
              req.flash("alert", { msg: error.message });
              res.redirect("/reporte/cliente");
            }
            res.type("pdf");
            stream.pipe(res);
          });
        }
      }
    );
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/cliente");
  }
};

const inventarioReporteController = async (req, res) => {
  try {
    const franela = req.session.franela;
    const producto = req.session.producto;
    const inicio = req.session.inicio;
    const final = req.session.final;
    ejs.renderFile(
      path.join(__dirname, `../views/recibos/`, "inventario.ejs"),
      { franela, producto, inicio, final },
      (err, data) => {
        if (err) {
          req.flash("alert", { msg: error.message });
          res.redirect("/reporte/inventario");
        } else {
          pdf.create(data).toStream((err, stream) => {
            if (err) {
              req.flash("alert", { msg: error.message });
              res.redirect("/reporte/inventario");
            }
            res.type("pdf");
            stream.pipe(res);
          });
        }
      }
    );
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/inventario");
  }
};

const ventaReporteController = async (req, res) => {
  try {
    const total = req.session.total;
    const data = req.session.data;
    const inicio = req.session.inicio;
    const final = req.session.final;
    const estado = req.session.estado;
    ejs.renderFile(
      path.join(__dirname, `../views/recibos/`, "venta.ejs"),
      { total, data, inicio, final, estado },
      (err, data) => {
        if (err) {
          req.flash("alert", { msg: error.message });
          res.redirect("/reporte/venta");
        } else {
          pdf.create(data).toStream((err, stream) => {
            if (err) {
              req.flash("alert", { msg: error.message });
              res.redirect("/reporte/venta");
            }
            res.type("pdf");
            stream.pipe(res);
          });
        }
      }
    );
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/reporte/venta");
  }
};

module.exports = {
  renderFacturaController,
  renderInventarioController,
  renderVentaController,
  renderClienteController,
  clienteReporteController,
  inventarioReporteController,
  ventaReporteController,
};
