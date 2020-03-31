const express = require('express');

const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


const routes = express.Router()

routes.get('/ongs', ongController.List)
routes.post('/ongs', ongController.create)

routes.post('/incidents', incidentController.create)
routes.get('/incidents', incidentController.listIncidents)
routes.delete('/incidents/:id', incidentController.deleteIncident)

routes.get('/profile', ProfileController.index)

routes.post('/session', SessionController.create)

module.exports = routes;