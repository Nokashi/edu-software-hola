const asyncHandler = require('express-async-handler');
const User = require('../models/user');

exports.landing_page = asyncHandler(async (req, res, next) => {
    
    res.render('landing');
})

exports.landing_page_bill = asyncHandler(async (req, res, next) => {
    images = ['andalucia.webp', 'barcelona.webp', 'granada.jpg', 'madrid.jpg']
    res.render('nav_menu', {images});
})

exports.courses_preview = asyncHandler(async (req, res, next) => {
    res.render('courses-preview');
})

exports.courses_done = asyncHandler(async (req, res, next) => {
    const userId = req.user._id

    quizzesDone = await fetchChapterQuizzesDone(userId, 2)

    console.log(quizzesDone)
})

