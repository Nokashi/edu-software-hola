const asyncHandler = require('express-async-handler');

exports.landing_page = asyncHandler(async (req, res, next) => {
    res.render('landing');
})

exports.landing_page_bill = asyncHandler(async (req, res, next) => {
    res.render('nav_menu');
})

exports.courses_preview = asyncHandler(async (req, res, next) => {
    res.render('courses-preview');
})

