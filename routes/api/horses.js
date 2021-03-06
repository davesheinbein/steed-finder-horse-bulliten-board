var express = require('express');
var router = express.Router();
var horsesCtrl = require('../../controllers/api/horses');

router.get('/', horsesCtrl.index);
// router.get('/:id', horsesCtrl.show);
router.post('/', checkAuth, horsesCtrl.create);
router.delete('/:id', checkAuth, horsesCtrl.delete);
router.put('/:id', checkAuth, horsesCtrl.update);


/*--- Helper Functions ---*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorization' });
}


module.exports = router;
