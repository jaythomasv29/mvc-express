const express = require('express')
const {getMessages, postMessage} = require('./controllers/messages.controller')
const { postFriend, getFriends, getFriend} = require('./controllers/friends.controller')
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next()
  const delta = Date.now() - start
  console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use(express.json())  // parses incoming request with JSON payloads

// friends router
const friendsRouter = express.Router()

friendsRouter.post('/', postFriend)
friendsRouter.get('/', getFriends)
friendsRouter.get('/:friendId', getFriend)
// mount friendsRouter on app on /friends path
app.use('/friends', friendsRouter)

const messagesRouter = express.Router()
messagesRouter.get('/', getMessages)
messagesRouter.post('/', postMessage)
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})