const asyncHandler = require('express-async-handler');

exports.landing_page = asyncHandler(async (req, res, next) => {
    res.render('landing');
})

