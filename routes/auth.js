const express = require('express');
const router = express.Router();


// registration
router.get('/register', function(req, res, next){
    res.send("NOT IMPLEMENTED: Sign Up page");
})

// login
router.get('/login', function(req, res, next){
    res.send("NOT IMPLEMENTED: Login page")
})

// TODO router.get('/logout')

module.exports = router;




