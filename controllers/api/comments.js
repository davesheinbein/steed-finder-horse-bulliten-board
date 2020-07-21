const Horse = require('../../models/horse');

module.exports = {
    create: createHorseComment,
    delete: deleteHorseComment,
};

function createHorseComment(req, res) {
    // console.log('hittin createHorseComment!!!!!!!');
    // req.body.createdby = req.user._id;
    // console.log(req.body); // { creator: '', comment: '' }
    console.log(req.user, '<<<<< req.user');
    Horse.findById(req.params.horseid, function (err, horse) {
        req.body.creator = req.user.name
        horse.comments.push(req.body);
        horse.save(function (err, h) {
            // res.redirect(`/details`);
            // console.log(horse);
            // console.log(err);
            res.status(200).json(horse)
        });
    });
}

function deleteHorseComment(req, res) {
    console.log(req.params.id, 'req.params.id');
    Horse.findOne({ "comments._id": req.params.id }, function (err, horse) {
        const comment = horse.comments.id(req.params.id);
        console.log(comment, '<<<<< comment');
        console.log(err, '<<<<<< err');
        horse.comments.pull(comment);
        horse.save(function (err) {
            res.json(horse);
        });
    });
}
