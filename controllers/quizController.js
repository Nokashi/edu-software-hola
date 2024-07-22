const Question = require('../models/question');
const User = require('../models/user')
const Scenario = require('../models/scenario')
const asyncHandler = require('express-async-handler');

const quizzes = [
    { id: 1, title: 'Quiz for Course 1', description: 'Test your knowledge on Course 1' },
    { id: 2, title: 'Quiz for Course 2', description: 'Test your knowledge on Course 2' },
    { id: 3, title: 'Quiz for Course 3', description: 'Test your knowledge on Course 3' },
    { id: 4, title: 'Quiz for Course 4', description: 'Test your knowledge on Course 4'},
    { id: 5, title: 'Quiz on Everything you have learned', description: 'Test your knowledge on all Courses'}
];


exports.quiz_list = asyncHandler(async (req, res, next) => {
    // const userId = req.user._id
    // quizzesDone = await fetchChapterQuizzesDone(userId, 1);
    
    res.render('quizzes', {quizzes});
});



exports.quiz1 = asyncHandler(async (req, res, next) => {
    const userId = req.user._id
    const userData = await User.findById(userId);

    const averageGrade = userData.average_grade;
    const quizzesCompleted = userData.performance_history.filter(entry => entry.quiz_chapter === 1).length;

    let questions = []

    if (quizzesCompleted < 3) {
        // If less than 3 quizzes completed, select 10 random questions
        questions = await Question.aggregate([
            { $match: { chapter: 1 } },
            { $sample: { size: 10 } }
        ]);
    } else {
        // Calculate ratio of hard and easy questions based on average grade
        const hardRatio = averageGrade / 100;
        const easyRatio = 1 - hardRatio;

        // Query questions based on difficulty levels
        const hardQuestions = await Question.aggregate([
            { $match: { chapter: 1, difficulty_level: 'Hard' } },
            { $sample: { size: Math.ceil(10 * hardRatio) } }
        ]);
        
        const easyQuestions = await Question.aggregate([
            { $match: { chapter: 1, difficulty_level: 'Easy' } },
            { $sample: { size: Math.floor(10 * easyRatio) } }
        ]);        

        // Combine hard and easy questions
        questions = [...hardQuestions, ...easyQuestions];
    }

    // const questions = await Question.find({ chapter: 1 });
    console.log(questions)
    res.render('quiz', {questions});
});

exports.quiz2 = asyncHandler(async (req, res, next) => {
    const userId = req.user._id
    const userData = await User.findById(userId);

    const averageGrade = userData.average_grade;
    const quizzesCompleted = userData.performance_history.filter(entry => entry.quiz_chapter === 2).length;

    let questions = []

    if (quizzesCompleted < 3) {
        // If less than 3 quizzes completed, select 10 random questions
        questions = await Question.aggregate([
            { $match: { chapter: 1 } },
            { $sample: { size: 10 } }
        ]);
    } else {
        // Calculate ratio of hard and easy questions based on average grade
        const hardRatio = averageGrade / 100;
        const easyRatio = 1 - hardRatio;

        // Query questions based on difficulty levels
        const hardQuestions = await Question.aggregate([
            { $match: { chapter: 2, difficulty_level: 'Hard' } },
            { $sample: { size: Math.ceil(10 * hardRatio) } }
        ]);
        
        const easyQuestions = await Question.aggregate([
            { $match: { chapter: 2, difficulty_level: 'Easy' } },
            { $sample: { size: Math.floor(10 * easyRatio) } }
        ]);        

        // Combine hard and easy questions
        questions = [...hardQuestions, ...easyQuestions];
    }

    // const questions = await Question.find({ chapter: 1 });
    console.log(questions)
    res.render('quiz', {questions});
});

exports.quiz3 = asyncHandler(async (req, res, next) => {
    const userId = req.user._id
    const userData = await User.findById(userId);

    const averageGrade = userData.average_grade;
    const quizzesCompleted = userData.performance_history.filter(entry => entry.quiz_chapter === 3).length;

    let questions = []

    if (quizzesCompleted < 3) {
        // If less than 3 quizzes completed, select 10 random questions
        questions = await Question.aggregate([
            { $match: { chapter: 1 } },
            { $sample: { size: 10 } }
        ]);
    } else {
        // Calculate ratio of hard and easy questions based on average grade
        const hardRatio = averageGrade / 100;
        const easyRatio = 1 - hardRatio;

        // Query questions based on difficulty levels
        const hardQuestions = await Question.aggregate([
            { $match: { chapter: 3, difficulty_level: 'Hard' } },
            { $sample: { size: Math.ceil(10 * hardRatio) } }
        ]);
        
        const easyQuestions = await Question.aggregate([
            { $match: { chapter: 3, difficulty_level: 'Easy' } },
            { $sample: { size: Math.floor(10 * easyRatio) } }
        ]);        

        // Combine hard and easy questions
        questions = [...hardQuestions, ...easyQuestions];
    }

    // const questions = await Question.find({ chapter: 1 });
    console.log(questions)
    res.render('quiz', {questions});
});

exports.quiz4 = asyncHandler(async (req, res, next) => {
    const userId = req.user._id
    const userData = await User.findById(userId);

    const averageGrade = userData.average_grade;
    const quizzesCompleted = userData.performance_history.filter(entry => entry.quiz_chapter === 4).length;

    let questions = []

    if (quizzesCompleted < 3) {
        // If less than 3 quizzes completed, select 10 random questions
        questions = await Question.aggregate([
            { $match: { chapter: 1 } },
            { $sample: { size: 10 } }
        ]);
    } else {
        // Calculate ratio of hard and easy questions based on average grade
        const hardRatio = averageGrade / 100;
        const easyRatio = 1 - hardRatio;

        // Query questions based on difficulty levels
        const hardQuestions = await Question.aggregate([
            { $match: { chapter: 4, difficulty_level: 'Hard' } },
            { $sample: { size: Math.ceil(10 * hardRatio) } }
        ]);
        
        const easyQuestions = await Question.aggregate([
            { $match: { chapter: 4, difficulty_level: 'Easy' } },
            { $sample: { size: Math.floor(10 * easyRatio) } }
        ]);        

        // Combine hard and easy questions
        questions = [...hardQuestions, ...easyQuestions];
    }

    // const questions = await Question.find({ chapter: 1 });
    console.log(questions)
    res.render('quiz', {questions});
});

exports.quizAll = asyncHandler(async (req, res, next) => {
    const questions = await Question.find();

    res.render('quiz', {questions});
});

exports.submit_quiz = asyncHandler(async (req, res, next) => {
    
    const answers = req.body

    // Initialize an empty object to store extracted answers
    const userAnswers = {};
    let userID;
    // Iterate over the keys in answers object
    for (const key in answers) {
        // Check if the key is not 'userId'
        if (key == 'userId')
        {
            userID = answers[key]
        }
        if (key !== 'userId') {
            // Extract the questionId from the key
            const questionId = key.match(/\[(.*?)\]/)[1];
            // Assign the answer to the corresponding questionId in userAnswers
            userAnswers[questionId] = answers[key];
        }
    }
    
    console.log(userAnswers);
    console.log(userID)

    const questionIds = Object.keys(userAnswers);
    const questions = await Question.find({ _id: { $in: questionIds } });

    console.log(questions)

    let score = 0;
    let totalQuestions = questions.length;

    // Compare the submitted answers with the correct answers
    questions.forEach(question => {
        if (userAnswers[question._id] === question.correctAnswer) {
            score++;
        }
    });

    // Calculate the percentage score
    const percentageScore = (score / totalQuestions) * 100;

    // Update the user's performance history and average grade
    const user = await User.findById(userID);
    user.performance_history.push({
        quiz_chapter: questions[0].chapter, // Assuming all questions are from the same chapter
        grade: percentageScore,
        quiz_date: new Date()
    });

    user.average_grade = user.performance_history.reduce((sum, record) => sum + record.grade, 0) / user.performance_history.length;
    avg_grade = user.average_grade;
    await user.save();

    res.render('quiz_results', {percentageScore, score, totalQuestions})
});


