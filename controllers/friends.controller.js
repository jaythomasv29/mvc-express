const model = require('../models/friends.model')

function postFriend(req, res) {
  
    if(!req.body.name) {
      return res.status(400).json({
        error: 'Missing friend name'
      })
    }
    const newFriend = {
      id: model.length, 
      name: req.body.name
    }
    model.push(newFriend)
    res.json(model)
}

function getFriends(req, res) {
  res.json(model)
}

function getFriend(req, res) {
  const {friendId} = req.params

  console.log(friendId);
  if(model[friendId]) {
    res.json(model[Number(friendId)])
  } else {
    res.status(404).json({error: 'user not found'})

  }
}

module.exports = {
  postFriend,
  getFriend,
  getFriends,
}