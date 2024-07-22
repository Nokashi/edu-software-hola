const Question = require('../models/question');
const User = require('../models/user')
const asyncHandler = require('express-async-handler');

async function hasCompletedAllCourses(userId) {
    const user = await User.findById(userId);
    
    if (!user || !user.performance_history) {
        return false;
    }

    const completedCourses = new Set();

    user.performance_history.forEach(entry => {
        completedCourses.add(entry.quiz_chapter);
    });

    return completedCourses.size >= 6;
}

exports.quiz_list = asyncHandler(async (req, res, next) => {
    // const userId = req.user._id
    // quizzesDone = await fetchChapterQuizzesDone(userId, 1);
    if (!req.isAuthenticated()) 
    {
        res.render('session-expired')
    }
    else {
        const check_completeness = await hasCompletedAllCourses(req.user._id)
        res.render('quizzes', {check_completeness});
    }
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

    const weights = {
        'Easy': 1,
        'Hard': 2
    };

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
    let max_score = 0;
    let totalQuestions = questions.length;
    let correct_answers = 0;

    // Compare the submitted answers with the correct answers
    questions.forEach(question => {
        if (userAnswers[question._id] === question.correctAnswer) {
            score += weights[question.difficulty_level];
            correct_answers++
        }
        max_score += weights[question.difficulty_level]
    });

    // Calculate the percentage score
    const percentageScore = (score / max_score) * 100;

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

    let results_message;

    if (percentageScore >= 90) {

        results_message = "Μπράβο σου! τα πήγες περίφημα!"
    } else if (percentageScore >= 60)
    {
        results_message = "Πάρα πολύ καλή προσπάθεια! Συνέχισε έτσι."
    }
    else {
        results_message = "Μάλλον θα πρέπει να κάνουμε λίγο ακόμα επανάληψη. Με μεθοδικότητα θα τα πας ακομα καλύτερα την επόμενη φορα!"
    }

    res.render('quiz_results', {percentageScore, correct_answers, totalQuestions, results_message})
});


