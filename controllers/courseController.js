const asyncHandler = require('express-async-handler');


exports.course_list = asyncHandler(async (req, res, next) => {
    if(req.isAuthenticated())
    {
        res.render('courseList');
    } 
    else {
        res.render('courses-preview')
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

exports.course5 =  asyncHandler(async (req, res, next) => {
    res.render('course5');

})



