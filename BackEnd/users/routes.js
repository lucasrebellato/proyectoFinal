const express = require('express');
const router = express.Router()
const userController = require('./controller')

router.get('/getUsers', userController.getUsers)

router.post('/logUser', userController.logUser)

router.get('/checkUser', userController.checkUser)

router.post('/addUser', userController.addUser)

router.delete('/:id', userController.deleteUser) 


module.exports = router;
