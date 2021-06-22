var express = require('express');
var router = express.Router();
const favorisController = require("../controllers/favorisController");
const passportConfig = require('../config/passport');


router.get('/getAll', favorisController.getAllFavoris);
router.post('/add', favorisController.newFavoris);
router.put('/update', favorisController.updateFavoris);
router.delete('/delete', favorisController.deleteFavoris);
router.post('/getfavorisbyid', favorisController.getFavorisById);
router.post('/checkFavoris', favorisController.checkFavoris);

router.post('/getFavorisByUser', passportConfig.verifyToken, favorisController.getFavorisByUser);
router.post('/getIfFavoris', passportConfig.verifyToken, favorisController.getIfFavoris);

module.exports = router;