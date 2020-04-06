const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./db/mongoose')
const User = require('./models/user')
const Poll = require('./models/poll')

app.use(express.json())

app.post('/users', (req, res) => {
  const user = new User(req.body)
  user.save().then((poll) => {
    res.send(user)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

app.post('/polls', (req, res) => {
  const poll = new Poll(req.body)
  poll.save().then((poll) => {
    res.send(poll)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


