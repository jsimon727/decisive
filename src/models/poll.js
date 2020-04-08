const mongoose = require('mongoose')
const validator = require('validator')

const Poll = mongoose.model('Poll', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: ''
  }
})

module.exports = Poll

