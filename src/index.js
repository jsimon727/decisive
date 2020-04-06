const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./db/mongoose')
const User = require('./models/user')

app.post('/polls', (req, res) => {
  res.send('testing!')
})

app.use(express.json())

app.post('/users', (req, res) => {
  const user = new User(req.body)
  user.save().then(() => {
    res.send(user)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


