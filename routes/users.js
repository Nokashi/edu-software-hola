const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET Request for user list
router.get('/', userController.user_list);

// get profile of id given as parameter
router.get('/:id', userController.profile);


module.exports = router;
