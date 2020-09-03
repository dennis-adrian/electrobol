const { Schema, model } = require('mongoose');

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
    modelo: {
        type: String,
        required: true
    },
    garantiaVigente: {
        type: Boolean,
        required: true
    },
    problema: {
        type: String
    },
    estadoEnBd: {
        type: Boolean
    }
}, {
    timestamps: true
});

module.exports = model('Articulo', ArticuloSchema);