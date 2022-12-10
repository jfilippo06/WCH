const {
  buscarClienteService,
  buscarOrderService,
  registrarClienteService,
  facturaFranelasService,
  facturaProductosService,
  obtenerFranelaService,
  buscarFranelaService,
  registrarFranelaService,
  buscarProductoService,
  obtenerProductoService,
  registrarProductoService,
  obtenerFacturaFranela,
  obtenerFacturaProducto,
  obtenerTotalService,
  deleteFranelaService,
  deleteProductoService,
  cancelarService,
  pedidoFranelaService,
  pedidoProductoService,
  updateFranelaService,
  updateProductoService,
  registrarOrderService,
} = require("../services/venta");
const ejs = require("ejs");
const pdf = require("html-pdf");
const path = require("path");

const clienteRenderController = async (req, res) => {
  res.render("pages/venta/buscar-cliente");
};

const buscarClienteController = async (req, res) => {
  try {
    const { cedula } = req.body;
    const data = await buscarClienteService(cedula);
    const order = await buscarOrderService();
    if (data) {
      req.session.data = data;
      req.session.order = order;
      res.redirect("/venta/facturar");
    } else {
      req.flash("alert", { msg: "Cliente no existe" });
      res.redirect("/venta/registrar");
    }
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta");
  }
};

const registrarRenderController = async (req, res) => {
  res.render("pages/venta/registrar-cliente");
};

const registrarClienteController = async (req, res) => {
  try {
    const { nombre, cedula } = req.body;
    await registrarClienteService(nombre, cedula);
    const data = await buscarClienteService(cedula);
    const order = await buscarOrderService();
    req.session.data = data;
    req.session.order = order;
    res.redirect("/venta/facturar");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta/registrar");
  }
};

const facturarRenderController = async (req, res) => {
  try {
    const { page, size, opcion, tipo, valor } = req.query;
    const { id } = req.session.data;
    const order = req.session.order;
    const dataFranela = await facturaFranelasService(
      page,
      size,
      opcion,
      tipo,
      valor
    );
    const dataProducto = await facturaProductosService(
      page,
      size,
      opcion,
      tipo,
      valor
    );
    const facturaFranela = await obtenerFacturaFranela(id, order);
    const facturaProducto = await obtenerFacturaProducto(id, order);
    const total = await obtenerTotalService(id, order);
    const {
      totalItemsFranelas,
      franelas,
      prevFranelas,
      nextFranelas,
      franelaStock,
    } = dataFranela;
    const {
      totalItemsProductos,
      productos,
      prevProductos,
      nextProductos,
      productoStock,
    } = dataProducto;
    res.render("pages/venta/facturar", {
      totalItemsFranelas,
      franelas,
      prevFranelas,
      nextFranelas,
      franelaStock,
      totalItemsProductos,
      productos,
      prevProductos,
      nextProductos,
      productoStock,
      facturaFranela,
      facturaProducto,
      total,
    });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta/facturar");
  }
};

const facturaFranelaController = async (req, res) => {
  try {
    const { idFranela } = req.params;
    const { vendidos } = req.body;
    const { id } = req.session.data;
    const order = req.session.order;
    await buscarFranelaService(id, idFranela, order);
    const stockFranela = await obtenerFranelaService(idFranela);
    if (vendidos > stockFranela || vendidos == 0) {
      req.flash("alert", { msg: "No disponible en el stock" });
      res.redirect("/venta/facturar");
    } else {
      await registrarFranelaService(id, idFranela, order, vendidos);
      req.flash("success", { msg: "Añadido a la lista de venta" });
      res.redirect("/venta/facturar");
    }
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta/facturar");
  }
};

const facturaProductoController = async (req, res) => {
  try {
    const { idProducto } = req.params;
    const { vendidos } = req.body;
    const { id } = req.session.data;
    const order = req.session.order;
    await buscarProductoService(id, idProducto, order);
    const cantidadProducto = await obtenerProductoService(idProducto);
    if (vendidos > cantidadProducto || vendidos == 0) {
      req.flash("alert", { msg: "No disponible en el stock" });
      res.redirect("/venta/facturar");
    } else {
      await registrarProductoService(id, idProducto, order, vendidos);
      req.flash("success", { msg: "Añadido a la lista de venta" });
      res.redirect("/venta/facturar");
    }
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta/facturar");
  }
};

const deleteFranelaController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteFranelaService(id);
    res.redirect("/venta/facturar");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta/facturar");
  }
};

const deleteProductoController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteProductoService(id);
    res.redirect("/venta/facturar");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta/facturar");
  }
};

const cancelarController = async (req, res) => {
  try {
    const { id } = req.session.data;
    const order = req.session.order;
    await cancelarService(id, order);
    res.redirect("/venta");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta/facturar");
  }
};

const pedidoController = async (req, res) => {
  try {
    const { id, nombre, cedula } = req.session.data;
    const order = req.session.order;
    const usuario = req.user.userName;
    const facturaFranela = await obtenerFacturaFranela(id, order);
    const facturaProducto = await obtenerFacturaProducto(id, order);
    const total = await obtenerTotalService(id, order);
    await pedidoFranelaService(facturaFranela);
    await pedidoProductoService(facturaProducto);
    await updateFranelaService(facturaFranela);
    await updateProductoService(facturaProducto);
    await cancelarService(id, order);
    await registrarOrderService();
    const fecha = new Date().toLocaleDateString();
    ejs.renderFile(
      path.join(__dirname, `../views/invoices/`, "factura.ejs"),
      {
        fecha,
        order,
        nombre,
        cedula,
        usuario,
        facturaFranela,
        facturaProducto,
        total,
      },
      (err, data) => {
        if (err) {
          req.flash("alert", { msg: err.message });
          res.redirect("/venta/facturar");
        } else {
          pdf.create(data).toFile(`factura n${order}.pdf`, (err, data) => {
            if (err) {
              req.flash("alert", { msg: err.message });
              res.redirect("/venta/facturar");
            } else {
              res.redirect("/venta/facturar");
            }
          } )
        }
      }
    );
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/venta/facturar");
  }
};

module.exports = {
  clienteRenderController,
  buscarClienteController,
  registrarRenderController,
  facturarRenderController,
  registrarClienteController,
  facturaFranelaController,
  facturaProductoController,
  deleteFranelaController,
  deleteProductoController,
  cancelarController,
  pedidoController,
};
