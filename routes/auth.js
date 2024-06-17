const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require('passport');

// registration
router.get('/register', authController.register_page);

router.post('/register', authController.registration_auth);

// login
router.get('/login', authController.login_page);

router.post('/login', authController.login_auth);


// router.post('/login', authController.login_auth);

// TODO router.get('/logout')

module.exports = router;




