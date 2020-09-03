const clienteCtrl = {};
const Cliente = require('../models/Cliente');

clienteCtrl.crearNuevoCliente = async(req, res) => {
    const { nombre, ci, movil, email, referencia1, referencia2 } = req.body;
    const nuevoCliente = new Cliente({
        nombre,
        ci,
        infoContacto: [{
            movil,
            email,
            referencia1,
            referencia2
        }],
        estadoEnBd: true
    })
    await nuevoCliente.save();
    res.redirect('/clientes');
}
clienteCtrl.renderCliente = (req, res) => {
    res.redirect('/clientes')
}
clienteCtrl.renderClientesTodos = async(req, res) => {
    const clientes = await Cliente.find();
    res.render('clientes/clientes', { clientes })
}
clienteCtrl.renderFormEditar = (req, res) => {
    res.render('clientes/editar-cliente');
}
clienteCtrl.editarCliente = (req, res) => {
    res.send('editar cliente');
}
clienteCtrl.eliminarCliente = (req, res) => {
    res.send('eliminar cliente');
}
clienteCtrl.redireccionar = (req, res) => {
    res.redirect('/clientes');
}
module.exports = clienteCtrl;