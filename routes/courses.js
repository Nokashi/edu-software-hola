const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();

// Courses list
router.get('/', courseController.course_list);

// chapter 1
router.get('/1', courseController.course1);

// chapter 2
router.get('/2', courseController.course2);

// chapter 3
router.get('/3', courseController.course3);

// chapter 4
router.get('/4', courseController.course4);

//chapter 5
router.get('/5', courseController.course5)

module.exports = router;