import Horse from '../../models/horse'

module.exports = {
    createHorseComment,
    deleteHorseComment,
    updateHorseCom
};

function createHorseComment(req, res) {
    req.body.createdby = req.user._id;
    Horse.findById(req.params.id, function (err, horse) {
        horse.comments.push(req.body);
        horse.save(function (err, horse) {
            res.redirect(`/details`);
        });
    });
}

function deleteHorseComment(req, res) {
    Horse.findOne({ "comments._id": req.params.id }, function (err, horse) {
        const comment = horse.comments.id(req.params.id);
        comment.remove();
        horse.save(function (err) {
            res.redirect(`/details`);
        });
    });
}

function updateHorseCom(req, res) {
    Horse.findById(req.params.id, function (err, horse) {
        var comment = horse.comments.id(req.params.cid);
        comment.content = req.body.content;
        horse.save(function (err) {
            comment.save(function (e) {
                res.redirect("/details");
            });
        });
    });
}