const express = require('express');
const router = express.Router();


// Quiz List
router.get('/', function(req, res, next){
    res.send("NOT IMPLEMENTED: Quiz List")
})

// %% QUIZ PAGES %%

router.get('/quiz1', function(req, res, next){
    res.send("NOT IMPLEMENTED: Generates a quiz from chapter 1 questions");
})

router.get('/quiz2', function(req, res, next){
    res.send("NOT IMPLEMENTED: Generates a quiz from chapter 2 questions");
})

router.get('/quiz3', function(req, res, next){
    res.send("NOT IMPLEMENTED: Generates a quiz from chapter 3 questions");
})

router.get('/quiz4', function(req, res, next){
    res.send("NOT IMPLEMENTED: Generates a quiz from chapter 4 questions");
})

router.get('/quizAll', function(req, res, next){
    res.send("NOT IMPLEMENTED: Generates a quiz from all chapters");
})

module.exports = router;