const { Schema, model, SchemaTypes } = require('mongoose');

var Reparacion = new Schema({
    estado: {
        type: String
    },
    resultadoEvaluacion: {
        type: String
    },
    duracionEstimada: {
        type: String
    },
    precio: {
        type: Number
    }
});

const ArticuloSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    garantiaVigente: {
        type: Boolean,
        required: true
    },
    idCliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    reparacion: [Reparacion],
    estadoEnBd: {
        type: Boolean
    },
}, {
    timestamps: true
});

module.exports = model('Articulo', ArticuloSchema);