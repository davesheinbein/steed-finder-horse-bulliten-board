var express = require('express');
var router = express.Router();
var horsesCtrl = require('../../controllers/api/horses');

router.get('/', horsesCtrl.index);

module.exports = router;
