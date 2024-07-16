const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require('passport');

// registration
router.get('/register', authController.register_page_bill);

router.post('/register', authController.registration_auth);

// register page debug
// router.post('/register', authController.test)

router.get('/register-success', authController.register_success)

// login
router.get('/login', authController.login_page);

router.post('/login', authController.login_auth);

router.post('/logout', authController.logout_page);

router.get('/logout', authController.logout_page)

// router.post('/login', authController.login_auth);

// TODO router.get('/logout')

module.exports = router;




