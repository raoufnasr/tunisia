var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const passportConfig = require('../config/passport');

router.post('/login', userController.loginUser);
router.get('/getAllUsers', userController.getAllUsers);
router.delete('/delete', userController.deleteUser);
router.post('/getuserbyid', userController.getUserById);
router.post('/register', userController.newUtilisateur);
router.post('/update', passportConfig.verifyToken, userController.UpdateProfile);



module.exports = router;