const { Router } = require('express');
const router = Router();
const { crearNuevoArticulo, redireccionar, renderNuevoArticulo } = require('../controllers/articulo.controller');

//nuevo articulo
router.get('/articulos/nuevo/:id', renderNuevoArticulo);
router.post('/articulos/nuevo', crearNuevoArticulo);

module.exports = router;