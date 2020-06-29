const express = require('express')
const routes = express.Router()
const controllers = require('./controllers')

routes.get("/", controllers.showDonors)

routes.post("/", controllers.createDonors)

module.exports = routes