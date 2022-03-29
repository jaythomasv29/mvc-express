const express = require('express');

const { postFriend, getFriends, getFriend} = require('../controllers/friends.controller')
// friends router
const friendsRouter = express.Router()

friendsRouter.use((req, res, next) => {
  console.log(`Ip address: ${req.ip}`);
  next()
})

friendsRouter.post('/', postFriend)
friendsRouter.get('/', getFriends)
friendsRouter.get('/:friendId', getFriend)
// mount friendsRouter on app on /friends path

module.exports = friendsRouter