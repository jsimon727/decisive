const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000
require('./db/mongoose')
const User = require('./models/user')
const Poll = require('./models/poll')

const userRouter = require('./routers/user')
const pollRouter = require('./routers/poll')
app.use(userRouter)
app.use(pollRouter)

app.use(express.json())

const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Routes
const router = new express.Router()
app.use(router)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


