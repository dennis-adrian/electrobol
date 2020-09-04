const { Router } = require('express');
const router = Router();
const { crearNuevoArticulo, redireccionar, renderNuevoArticulo, renderArticulos } = require('../controllers/articulo.controller');

//nuevo articulo
router.get('/articulos/nuevo/:id', renderNuevoArticulo);
router.post('/articulos/nuevo', crearNuevoArticulo);
//listar articulos
router.get('/articulos', renderArticulos)

module.exports = router;