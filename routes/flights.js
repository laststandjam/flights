const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')
const ticketsCtrl = require('../controllers/tickets')

/* GET users listing. */

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);

module.exports = router;
