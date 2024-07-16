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
            req.flash('error', 'Μη έγκυρο όνομα χρήστη ή Κωδικός');
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
    res.render('login_v2');
});

exports.register_page = asyncHandler(async (req, res, next) => {
    if(req.isAuthenticated()) {
        res.send("you are already authenticated")
    }
    else{
        res.render('register')
    }
})

exports.register_page_bill =  asyncHandler(async (req, res, next) => {
    if(req.isAuthenticated()) {
        res.send("you are already authenticated")
    }
    else{
        res.render('registration_v2')
    }
})

exports.registration_auth = asyncHandler(async (req, res, next) => {
    const { first_name, surname, username, email, year_of_birth, password, confirmPassword } = req.body;

    const existingUsername = await User.findOne({username});
    if (existingUsername) {
        return res.render('register', { error: 'Το ονομα χρήστη υπάρχει ήδη!' });
    }

    const existingEmail = await User.findOne({email});
    if (existingEmail) {
        return res.render('register', { error: 'Το E-Mail υπάρχει ήδη' });
    }

    if (password !== confirmPassword) {
        return res.render('register', { error: 'Οι κωδικοί πρόσβασης δεν είναι ίδιοι' });
    }

    const newUser = new User({
        first_name: first_name,
        surname: surname,
        email: email,
        username: username,
        year_of_birth: year_of_birth,
    });

    // Register the user with passport-local-mongoose
    await User.register(newUser, password);
    console.log(`User ${email} registered successfully!`);
    res.render('register-success');
});

exports.logout_page = asyncHandler(async (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.render('logout');
    });
})

exports.register_success = asyncHandler(async (req, res, next) => {
    res.render('register-success')
})


exports.test = asyncHandler(async (req, res, next) => {
    console.log(req.body)
})