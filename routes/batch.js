const router = require('express').Router();
const batchController = require('../controllers/batch');

// get all batches
// example: localhost:5000/batches/
router.get('/', batchController.getAllBatches);

// add new batch
// example: localhost:5000/batches/
router.post('/', batchController.createNewBatch);

// if we want total quantity for particular size and color, send size and color values as queries
// example: localhost:5000/batches/totalQuantity?color=blue&size=S
router.get('/totalQuantity', batchController.getTotalQuantity);

module.exports = router;