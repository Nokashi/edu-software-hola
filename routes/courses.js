const express = require('express');
const router = express.Router();

// Courses list
router.get('/', function(req, res, next){
    res.send("NOT IMPLEMENTED: courses list");
})

// chapter 1
router.get('/chapter1', function(req, res, next){
    res.send("NOT IMPLEMENTED: chapter 1 page");
})

// chapter 2
router.get('/chapter2', function(req, res, next){
    res.send("NOT IMPLEMENTED: chapter 2 page");
})

// chapter 3
router.get('/chapter3', function(req, res, next){
    res.send("NOT IMPLEMENTED: chapter 3 page");
})

// chapter 4
router.get('/chapter4', function(req, res, next){
    res.send("NOT IMPLEMENTED: chapter 4 page");
})

module.exports = router;