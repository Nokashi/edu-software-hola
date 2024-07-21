const asyncHandler = require('express-async-handler');
const User = require('../models/user');

async function fetchChapterQuizzesDone(userId, chapterNum) {
    try {
        const result = await User.aggregate([
            { $match: { _id: userId } }, // Match the user by their _id
            { $unwind: '$performance_history' }, // Unwind the performance_history array
            { 
                $match: { 'performance_history.quiz_chapter': chapterNum } // Match only for quiz_chapter == ChapterNum
            },
            { $count: 'chapterQuizzesDone' } // Count the matched documents
        ]);

        if (result.length > 0) {
            return result[0].chapterQuizzesDone;
        } else {
            return 0; // Return 0 if no quizzes are found for chapter 1
        }
    } catch (error) {
        console.error('Error fetching chapter quizzes:', error);
        throw error;
    }
}

exports.landing_page = asyncHandler(async (req, res, next) => {
    
    res.render('landing');
})

exports.landing_page_bill = asyncHandler(async (req, res, next) => {
    images = ['andalucia.webp', 'barcelona.webp', 'granada.jpg', 'madrid.jpg']
    res.render('nav_menu', {images});
})

exports.courses_preview = asyncHandler(async (req, res, next) => {
    res.render('courses-preview');
})

exports.courses_done = asyncHandler(async (req, res, next) => {
    const userId = req.user._id

    quizzesDone = await fetchChapterQuizzesDone(userId, 2)

    console.log(quizzesDone)
})

