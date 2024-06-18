const Question = require('../models/question');
const asyncHandler = require('express-async-handler');

const quizzes = [
    { id: 1, title: 'Quiz for Course 1: Introduction to Programming', description: 'Test your knowledge on the basics of programming.' },
    { id: 2, title: 'Quiz for Course 2: Intermediate Programming', description: 'Assess your skills in intermediate programming topics.' },
    { id: 3, title: 'Quiz for Course 3: Advanced Programming', description: 'Challenge yourself with advanced programming questions.' },
    { id: 4, title: 'Quiz for Course 4: Expert Programming', description: 'Prove your expertise with these difficult programming questions.' },
    { id: 'All', title: 'Quiz on Everything you have learned', description: 'Prove your expertise on all taught materials.' }
];


exports.quiz_list = asyncHandler(async (req, res, next) => {
    res.render('quizzes', {quizzes});
});

exports.quiz1 = asyncHandler(async (req, res, next) => {
    const questions = await Question.find({ chapter: 1 });

    res.render('quiz', {questions});
})

exports.quiz2 = asyncHandler(async (req, res, next) => {
    const questions = await Question.find({ chapter: 2 });

    res.render('quiz', {questions});
})

exports.quiz3 = asyncHandler(async (req, res, next) => {
    const questions = await Question.find({ chapter: 3 });

    res.render('quiz', {questions});
})

exports.quiz4 = asyncHandler(async (req, res, next) => {
    const questions = await Question.find({ chapter: 4 });

    res.render('quiz', {questions});
})

exports.quizAll = asyncHandler(async (req, res, next) => {
    const questions = await Question.find();

    res.render('quiz', {questions});
})



