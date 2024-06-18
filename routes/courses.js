const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();

// Courses list
router.get('/', courseController.course_list);

// chapter 1
router.get('/chapter1', courseController.course1);

// chapter 2
router.get('/chapter2', courseController.course2);

// chapter 3
router.get('/chapter3', courseController.course3);

// chapter 4
router.get('/chapter4', courseController.course4);

module.exports = router;