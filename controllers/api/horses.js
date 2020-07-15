const Horse = require('../../models/horse');

module.exports = {
   index,
   show,
   create,
   delete: deleteOne,
}

function index(req, res) {
   Horse.find({}, function (err, horses) {
      res.status(200).json(horses)
   })
}

async function show(req, res) {
   const Horse = await Horse.findById(req.params.id);
   res.status(200).json(horse);
 }

function create(req, res) {
   req.body.user = req.user
   Horse.create(req.body, function (err, horse) {
      res.status(201).json(horse)
   })
}

async function deleteOne(req, res) {
   const deletedHorse = await Horse.findByIdAndRemove(req.params.id);
   res.status(200).json(deletedHorse);
 }