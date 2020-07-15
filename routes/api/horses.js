var express = require('express');
var router = express.Router();
var horsesCtrl = require('../../controllers/api/horses');

router.get('/', horsesCtrl.index);
router.get('/:id', horsesCtrl.show);
router.post('/', checkAuth, horsesCtrl.create);
router.post('/:id', checkAuth, horsesCtrl.delete);


/*--- Helper Functions ---*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorization' });
}


module.exports = router;
