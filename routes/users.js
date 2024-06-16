const express = require('express');
const router = express.Router();

// GET Request for user list
router.get('/', function(req, res, next) {
  res.send('NOT IMPLEMENTED: users list');
});

// get profile of id given as parameter
router.get('/:id', function (req, res, next){
  res.send(`NOT IMPLEMENTED: Profile of ${req.params.id}`);
});

module.exports = router;
