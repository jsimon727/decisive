const mongoose = require('mongoose')
const validator = require('validator')

const Poll = mongoose.model('Poll', {
  name: {
    type: string,
    required: true,
    trim: true
  },
  completed: {
    type: boolean,
    default: false,
  },
  description: {
    type: string,
    default: ''
  }
})

module.exports = Poll

