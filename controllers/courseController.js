const asyncHandler = require('express-async-handler');

const courses = [
    { id:1, title: 'Course 1', description: 'Description of Course 1', level: 'Beginner' },
    { id:2, title: 'Course 2', description: 'Description of Course 2', level: 'Intermediate' },
    { id:3, title: 'Course 3', description: 'Description of Course 3', level: 'Advanced' },
    { id:4, title: 'Course 4', description: 'Description of Course 4', level: 'Expert' },
    { id:5, title: 'Course 5', description: 'Description of Course 5', level: 'no idea'}
];


exports.course_list = asyncHandler(async (req, res, next) => {
    if(req.isAuthenticated())
    {
        res.render('courseList', {courses});
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



