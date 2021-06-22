var express = require('express');
var router = express.Router();
const commentaireController = require("../controllers/commentaireController");
const passportConfig = require('../config/passport');


router.post('/create', passportConfig.verifyToken, commentaireController.createCommentaire);
router.post('/getCommentaireByProduct', commentaireController.getCommentaireByProduct);


module.exports = router;