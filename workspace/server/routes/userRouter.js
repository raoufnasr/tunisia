var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const passportConfig = require('../config/passport');
const multer = require("multer");
const DIR = './uploads';
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
let upload = multer({ storage: storage });



router.post('/login', userController.loginUser);
router.get('/getAllUsers', userController.getAllUsers);
router.delete('/delete', userController.deleteUser);
router.post('/getuserbyid', userController.getUserById);
router.post('/register', userController.newUtilisateur);
router.post('/update', passportConfig.verifyToken, userController.UpdateProfile);
router.post('/getUserByToken', userController.getUserByToken);
router.post('/addimages', upload.single('avatar'), userController.uploadImage);

module.exports = router;