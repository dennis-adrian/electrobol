const { Schema, model } = require('mongoose');

const ClienteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    ci: {
        type: String,
        required: true
    },
    infoContacto: [{
        movil: {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        referencia1: {
            type: String,
            required: true
        },
        referencia2: {
            type: String
        }
    }],
    estadoEnBd: {
        type: Boolean
    }
}, {
    timestamps: true
});

module.exports = model('Cliente', ClienteSchema);