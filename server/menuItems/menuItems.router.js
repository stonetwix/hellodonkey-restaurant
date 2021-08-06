const express = require('express');
const foodsRouter = express.Router();
const controller = require('./menuItems.controller');
const { body, validationResult } = require('express-validator');

foodsRouter
    .get('/api/menuitems', controller.getAllMenuItems)
    .get('/api/menuitems/:id', controller.getOneMenuItem)
    // .post()
    // .put()
    // .delete();


module.exports = foodsRouter;
