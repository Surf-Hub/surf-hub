const express = require('express');
const apiRouter = express.Router();
const apiController = require('../controllers/apiController.js');

apiRouter.get('/', 
    apiController.getWeatherData,
    apiController.getTideData, (req, res) => {
        res.status(200).json(res.locals.surfConditions)
});

apiRouter.post('/fav', apiController.addFavLocation, (req, res) => {
    res.status(200).json(res.locals.newFav)
})

apiRouter.get('/fav', apiController.getAllFavLocations, (req, res) => {
    res.status(200).json(res.locals.allFavLocations)
})

module.exports = apiRouter;
