const express = require('express');
const path = require('path')

const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next()
  const delta = Date.now() - start
  console.log(`${req.method} ${req.url} ${delta}ms`)
})

// serving website with node
// serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())  // parses incoming request with JSON payloads

app.set('view engine', 'hbs');
// A directory or an array of directories for the application's views.
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Meet the team',
    caption: 'Now hiring for our team! Apply!'
  })
})
app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})