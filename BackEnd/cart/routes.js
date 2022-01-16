const express = require('express');
const router = express.Router()
const buyController = require('./controller')

router.get('/getBuy',buyController.getBuy)

router.post('/createBuy',buyController.createBuy)


module.exports = router;
