const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require('passport');

// registration
router.get('/register', function(req, res, next){
    res.send("NOT IMPLEMENTED: Sign Up page");
})

// login
router.get('/login', authController.login_page);

router.post('/login', authController.login_auth);


// router.post('/login', authController.login_auth);

// TODO router.get('/logout')

module.exports = router;




