var express = require('express');
var router = express.Router();
const favorisController = require("../controllers/favorisController");



router.get('/getAll', favorisController.getAllFavoris);
router.post('/add', favorisController.newFavoris);
router.put('/update', favorisController.updateFavoris);
router.delete('/delete', favorisController.deleteFavoris);
router.post('/getfavorisbyid', favorisController.getFavorisById);
router.post('/checkFavoris', favorisController.checkFavoris);



module.exports = router;