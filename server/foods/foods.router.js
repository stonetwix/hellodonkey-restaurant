const express = require('express');
const foodsRouter = express.Router();
const controller = require('./foods.controller');
const { body, validationResult } = require('express-validator');

foodsRouter
    .get('/api/foods', controller.getAllFoods)
    // .post()
    // .put()
    // .delete();


module.exports = foodsRouter;
