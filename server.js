// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const bands = require('./controllers/band_controller')
const bandsController = require('./controllers/band_controller')
const stagesController = require('./controllers/stage_controller')
const eventsController = require('./controllers/event_controller')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
app.use('/bands', bandsController)
app.use('/stages', stagesController)
app.use('/events', eventsController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})