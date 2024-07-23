const asyncHandler = require('express-async-handler');
const User = require('../models/user');

/*
exports.landing_page = asyncHandler(async (req, res, next) => {
    res.render('landing');
})
*/

exports.landing_page_bill = asyncHandler(async (req, res, next) => {
    images = ['escorial.jpg', 'prado.jpg', 'guell.jpg', 'segrada.jpg']
    res.render('nav_menu', {images});
})

exports.courses_preview = asyncHandler(async (req, res, next) => {
    res.render('courses-preview');
})


