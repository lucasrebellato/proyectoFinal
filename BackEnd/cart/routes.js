const express = require('express');
const router = express.Router()
const buyController = require('./controller')


router.post('/createBuy',buyController.createBuy)


module.exports = router;
