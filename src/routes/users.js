const express = require('express');

const userController = require('../controller/users.js');

const router = express.Router();

// create - post
router.post('/', userController.createNewUser);

// read - get
router.get('/', userController.getAllUsers);

// update - patch
router.patch('/:idUsers', userController.updateUser);

// delete - delete
router.delete('/:idUsers', userController.deleteUser)

module.exports = router;
