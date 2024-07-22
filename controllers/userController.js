const asyncHandler = require('express-async-handler')
const User = require('../models/user');

exports.user_list = asyncHandler(async (req, res, next) => {
    const users = await User.find();
    res.render('user-list', { users });
});

exports.profile = asyncHandler(async (req, res, next) => {
    if(req.isAuthenticated()){
        const user = await User.findById(req.params.id);
        res.render('profile', { user });
    } else {
        res.render('session-expired')
    }
    
})