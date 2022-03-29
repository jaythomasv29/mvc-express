const path = require('path')

function getMessages (req, res) {
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'team.jpg'))
  res.render('messages', {
    title: 'Messages',
    friend: 'Elon Musk'
  })
  
}

function postMessage(req, res) {
  console.log('Updating messages')
}

module.exports = {
  getMessages, 
  postMessage,

}