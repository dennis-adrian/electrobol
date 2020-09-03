const { Router } = require('express');
const router = Router();
const { crearNuevoCliente, renderClientesTodos, editarCliente, eliminarCliente, renderFormEditar, redireccionar, renderEliminarCliente } = require('../controllers/cliente.controller')

//nuevo cliente
router.get('/clientes/nuevo', redireccionar);
router.post('/clientes/nuevo', crearNuevoCliente);
//todos los clientes
router.get('/clientes', renderClientesTodos);
//editar cliente
router.get('/clientes/editar/:id', renderFormEditar);
router.put('/clientes/editar/:id', editarCliente);
//eliminar cliente
router.get('/clientes/eliminar/:id', eliminarCliente);

module.exports = router;