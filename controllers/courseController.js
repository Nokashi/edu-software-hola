const asyncHandler = require('express-async-handler');
const User = require('../models/user');


exports.course_list = asyncHandler(async (req, res, next) => {
    if(req.isAuthenticated())
    {
        const userId = req.user._id
        const userData = await User.findById(userId);
        const hasCompleted_ch3 = userData.performance_history.some(history => history.quiz_chapter === 3);
        res.render('courseList', {hasCompleted_ch3});
    } 
    else {
        res.render('session-expired')
    }
})

exports.course1 = asyncHandler(async (req, res, next) => {
    res.render('course1');
})

exports.course2 = asyncHandler(async (req, res, next) => {
    res.render('course2');
})

exports.course3 = asyncHandler(async (req, res, next) => {
    res.render('course3');
})

exports.course4 = asyncHandler(async (req, res, next) => {
    res.render('course4');
})



