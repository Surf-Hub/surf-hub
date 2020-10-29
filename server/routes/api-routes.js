const express = require('express');
const fetch = require('node-fetch');
const apiRouter = express.Router();
const apiController = require('../controllers/apiController.js');

apiRouter.get('/', 
    apiController.getWeatherData,
    apiController.getTideData, 
    (req, res) => {
        res.status(200).json(res.locals.surfConditions)
});

module.exports = apiRouter;
