const express = require('express');
const router = express.Router();
const landingController = require('../controllers/landingController');


// GET request to get landing page, renders landing.ejs
router.get('/', landingController.landing_page);

module.exports = router;
