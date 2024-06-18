const asyncHandler = require('express-async-handler')
const User = require('../models/user');
const { render } = require('ejs');

exports.user_list = asyncHandler(async (req, res, next) => {
    const users = await User.find();
    res.render('user-list', { users });
});

exports.profile = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    res.render('profile', { user });
})