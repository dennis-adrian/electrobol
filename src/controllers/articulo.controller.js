const Articulo = require('../models/Articulo');
const Cliente = require('../models/Cliente');
const articuloCtrl = {};

articuloCtrl.renderNuevoArticulo = async(req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.render('articulos/nuevo-articulo', { cliente });
}
articuloCtrl.crearNuevoArticulo = async(req, res) => {
    const { tipo, marca, color, garantiaVigente, idCliente } = req.body;
    const nuevoArticulo = new Articulo({
        tipo,
        marca,
        color,
        garantiaVigente,
        idCliente,
        estadoEnBd: true
    })
    await nuevoArticulo.save();
    res.redirect('/articulos');
}
articuloCtrl.renderArticulos = async(req, res) => {
    const articulos = await Articulo.find({ estadoEnBd: true }).sort({ _id: 'desc' });
    res.render('articulos/articulos', { articulos })
}

module.exports = articuloCtrl;