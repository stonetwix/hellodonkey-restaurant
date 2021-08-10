const express = require('express');
const menuItemsRouter = express.Router();
const controller = require('./menuItems.controller');
const { body, validationResult } = require('express-validator');

menuItemsRouter
    .get('/api/menuitems', controller.getAllMenuItems)
    .get('/api/menuitems/:id', controller.getOneMenuItem)
    // .post()
    // .put()
    // .delete();


module.exports = menuItemsRouter;
