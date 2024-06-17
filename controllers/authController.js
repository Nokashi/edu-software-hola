const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const passport = require('passport')

exports.login_auth = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { 
            req.flash('error', err.message);
            return next(err); 
        }
        if (!user) { 
            req.flash('error', 'Invalid username or password');
            return res.redirect('/login'); 
        }
        req.logIn(user, (err) => {
            if (err) { 
                req.flash('error', err.message);
                return next(err); 
            }
            req.flash('success', 'Welcome back!');
            return res.redirect('/');
        });
    })(req, res, next);
};

exports.login_page = asyncHandler(async (req, res, next) => {
    res.render('login');
});