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

router.get('/retention', quizController.retentionQuiz);

router.post('/1', quizController.submit_quiz);

router.post('/2', quizController.submit_quiz);

router.post('/3', quizController.submit_quiz);

router.post('/4', quizController.submit_quiz);

router.post('/5', quizController.submit_quiz);

router.post('/retention', quizController.submit_quiz_retention);

module.exports = router;