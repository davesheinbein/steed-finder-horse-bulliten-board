const Horse = require('../../models/horse');

module.exports = {
    create: createHorseComment,
    delete: deleteHorseComment,
};

function createHorseComment(req, res) {
    // console.log('hittin createHorseComment!!!!!!!');
    // req.body.createdby = req.user._id;
    // console.log(req.body); // { creator: '', comment: '' }
    Horse.findById(req.params.horseid, function (err, horse) {
        horse.comments.push(req.body);
        horse.save(function (err, horse) {
            // res.redirect(`/details`);
            // console.log(horse);
            // console.log(err);
        });
    });
}

function deleteHorseComment(req, res) {
    // console.log(req.params, 'req.params');
    console.log(req.params.id, 'req.params.id');
    
    Horse.findOne({ "comments._id": req.params.id }, function (err, horse) {
        const comment = horse.comments.id(req.params.id);
        console.log(comment, 'comment');
        // console.log(err, 'err');
        horse.comments.pull(comment);
        horse.save(function (err) {
            // res.redirect(`/details`);
        });
    });
}
