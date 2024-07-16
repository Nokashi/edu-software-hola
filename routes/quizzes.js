const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');


// Quiz List
router.get('/', quizController.quiz_list);

// %% QUIZ PAGES %%

router.get('/quiz1', quizController.quiz1);

router.get('/quiz2', quizController.quiz2);

router.get('/quiz3', quizController.quiz3);

router.get('/quiz4', quizController.quiz4);

router.get('/quizAll', quizController.quizAll);

router.post('/quiz1', quizController.submit_quiz)

module.exports = router;