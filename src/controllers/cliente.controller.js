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
    const clientes = await Cliente.find({ estadoEnBd: true }).sort({ _id: 'desc' });

    res.render('clientes/clientes', { clientes })
}
clienteCtrl.renderFormEditar = async(req, res) => {
    const cliente = await Cliente.findById(req.params.id)
    res.render('clientes/editar-cliente', { cliente });
}
clienteCtrl.editarCliente = async(req, res) => {
    const { nombre, ci, movil, email, referencia1, referencia2 } = req.body;
    await Cliente.findByIdAndUpdate(req.params.id, {
        nombre,
        ci,
        infoContacto: [{
            movil,
            email,
            referencia1,
            referencia2
        }]
    });
    res.redirect('/clientes');
}
clienteCtrl.eliminarCliente = async(req, res) => {
    await Cliente.findByIdAndUpdate(req.params.id, {
        estadoEnBd: false
    });
    res.redirect('/clientes');
}
clienteCtrl.redireccionar = (req, res) => {
    res.redirect('/clientes');
}
module.exports = clienteCtrl;