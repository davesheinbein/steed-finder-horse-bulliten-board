const Horse = require('../../models/horse');

module.exports = {
   index,
   create
}

function index(req, res) {
   Horse.find({}, function (err, horses) {
       res.status(200).json(horses)
   })
}

function create(req, res) {
   Horse.create(req.body, function (err, horse) {
       res.status(201).json(horse)
   })
}