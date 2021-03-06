const express = require('express')
const router = new express.Router()
const Poll = require('../models/poll')

router.get('/polls', (req, res) => {
  res.render('polls')
})

router.post('/polls', (req, res) => {
  const poll = new Poll(req.body)
  poll.save().then((poll) => {
    res.render('poll', {
      pollName: poll.name,
      pollDescription: poll.description
    })
  }).catch((e) => {
    res.status(400).send(e)
  })
})

module.exports = router
