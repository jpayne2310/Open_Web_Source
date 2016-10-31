var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/about');

/* GET form page. */
router.get('/', ctrlMain.about);

module.exports = router;