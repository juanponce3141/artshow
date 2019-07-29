var express = require('express');
var router = express.Router();

const db = require('../db/queries');


/* GET users listing. */
router.get('/', function(req, res) {
  db.getUsers(req, res)
});


router.post('/', function(req, res) {
  db.createUser(req, res)
});

module.exports = router;
