var express = require('express');
var router = express.Router();

const db = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.getArt(req, res)
});

router.get('/:id', function(req, res, next) {
    db.getArtById(req, res)
});

router.post('/:id/comments', function(req, res, next) {
    db.createComment(req, res)
});

module.exports = router;
