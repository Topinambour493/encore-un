const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('', userController.modifyUser)

module.exports = router;