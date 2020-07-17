const Horse = require('../../models/horse');


module.exports = {
   index,
   // show,
   create,
   delete: deleteOne,
   update
}

function index(req, res) {
   Horse.find({}, function (err, horses) {
      res.status(200).json(horses)
   })
}

// async function show(req, res) {
//    console.log('HITTING SHOW');
//    const Horse = await Horse.findById(req.params.id);
//    res.status(200).json(horse);
//  }

function create(req, res) {
   req.body.user = req.user._id
   Horse.create(req.body, function (err, horse) {
      console.log(err, 'err');
      res.status(201).json(horse)
   })
}

async function deleteOne(req, res) {
   const deletedHorse = await Horse.findByIdAndRemove(req.params.id);
   res.status(200).json(deletedHorse);
 }


async function update(req, res) {
   const updatedHorse = await Horse.findByIdAndUpdate(req.params.id, req.body, {new: true});
   res.status(200).json(updatedHorse);
 }
 