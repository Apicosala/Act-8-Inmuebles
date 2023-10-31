const router = require('express').Router();

const InmueblesController = require('../../controllers/inmuebles.controllers')

const { checkInmuebleId } = require('../../middlewares/inmuebles.middleware');

//Rutas
router.get('/', InmueblesController.getInmuebles);
router.post('/', InmueblesController.createInmueble);
router.put('/:inmuebleId', checkInmuebleId, InmueblesController.updateInmueble);
router.delete('/:inmuebleId', checkInmuebleId, InmueblesController.deleteInmueble);

module.exports = router;