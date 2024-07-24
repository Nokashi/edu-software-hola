const asyncHandler = require('express-async-handler');
const User = require('../models/user');

/*
exports.landing_page = asyncHandler(async (req, res, next) => {
    res.render('landing');
})
*/

exports.landing_page_bill = asyncHandler(async (req, res, next) => {
    if(req.isAuthenticated())
    {
        const userId = req.user._id
        const userData = await User.findById(userId).select('performance_history').lean();

        // Check if performance_history array is not empty
        const hasCompletedQuiz = userData && userData.performance_history && userData.performance_history.length > 1;
        res.render('nav_menu', {hasCompletedQuiz});
    } else 
    {
        images = ['escorial.jpg', 'prado.jpg', 'guell.jpg', 'segrada.jpg']
        res.render('courses-preview', {images});
    }
    
})

/*
exports.courses_preview = asyncHandler(async (req, res, next) => {
    res.render('courses-preview');
})
*/


