const express = require('express');
const router = express.Router()
const productController = require('./controller')

router.get('/Coffees',productController.getCoffee)

router.get('/Desserts',productController.getDessert)

// router.post('/Coffees',productController.addCoffee)

// router.post('/Desserts',productController.addDessert)

// router.delete('/Coffees/:id',productController.deleteCoffee) 

// router.delete('/Desserts/:id',productController.deleteDessert)

module.exports = router;
