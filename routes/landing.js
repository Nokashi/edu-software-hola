const express = require('express');
const router = express.Router();
const landingController = require('../controllers/landingController');


// GET request to get landing page, renders landing.ejs
router.get('/', landingController.landing_page_bill);

// router.get('/courses-preview', landingController.courses_preview)

module.exports = router;
