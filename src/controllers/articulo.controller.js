const Articulo = require('../models/Articulo');
const articuloCtrl = {};

articuloCtrl.renderNuevoArticulo = (req, res) => {
    res.send('nuevo articulo');
}
articuloCtrl.crearNuevoArticulo = async(req, res) => {
    const { tipo, marca, color, modelo, garantiaVigente } = req.body;
    const nuevoArticulo = new Articulo({
        tipo,
        marca,
        color,
        modelo,
        garantiaVigente,
        estadoEnBd: true
    })
    await nuevoArticulo.save();
    res.redirect('/articulos');
}
clienteCtrl.redireccionar = (req, res) => {
    res.redirect('/articulos');
}
module.exports = articuloCtrl;