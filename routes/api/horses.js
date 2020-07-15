var express = require('express');
var router = express.Router();
var horsesCtrl = require('../../controllers/api/horses');

router.get('/', horsesCtrl.index);
router.post('/', checkAuth, horsesCtrl.create);


/*--- Helper Functions ---*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorization' });
}


module.exports = router;
