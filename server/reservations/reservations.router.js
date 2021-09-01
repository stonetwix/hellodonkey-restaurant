const express = require('express');
const reservationsRouter = express.Router();
const controller = require('./reservations.controller');
const { body, validationResult } = require('express-validator');

reservationsRouter
    .get('/api/reservations', controller.getAllReservations)
    //.get('/api/reservations/:id', controller.getOneOrder)
    // .post()
    // .put()
    // .delete();


module.exports = reservationsRouter;
