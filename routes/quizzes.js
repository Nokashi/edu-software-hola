const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');


// Quiz List
router.get('/', quizController.quiz_list);

// %% QUIZ PAGES %%

router.get('/1', quizController.quiz1);

router.get('/2', quizController.quiz2);

router.get('/3', quizController.quiz3);

router.get('/4', quizController.quiz4);

router.get('/5', quizController.quizAll);

router.post('/1', quizController.submit_quiz)

module.exports = router;