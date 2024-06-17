const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const passport = require('passport')

// exports.login_auth = asyncHandler(async (req, res, next) => {
//     passport.authenticate('local', {
//         successRedirect: '/',
//         failureRedirect: '/login',
//         failureFlash: true
//     });
// });

exports.login_page = asyncHandler(async (req, res, next) => {
    res.render('login');
});