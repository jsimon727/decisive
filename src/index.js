require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const publicDirectoryPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

require('./db/mongoose')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Set up views
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup routes
const userApiRouter = require('./routers/api/user')
const pollApiRouter = require('./routers/api/poll')
const userRouter = require('./routers/user')
const pollRouter = require('./routers/poll')
// const sessionRouter = require('./routers/session')
app.use(userApiRouter)
app.use(pollApiRouter)
app.use(userRouter)
app.use(pollRouter)
// app.use(sessionRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

