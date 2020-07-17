var express = require('express');
var router = express.Router();
var commentsCtrl = require('../../controllers/api/comments');

router.post('/:horseid', checkAuth, commentsCtrl.create);
router.delete('/:id', checkAuth, commentsCtrl.delete);


/*--- Helper Functions ---*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorization' });
}


module.exports = router;
