var express = require('express');
var router = express.Router();
const roleController = require("../controllers/roleController");



router.get('/getAll', roleController.getAllRole);
router.post('/add', roleController.newRole);
router.put('/update', roleController.updateRole);
router.delete('/delete', roleController.deleteRole);
router.post('/getrolebyid', roleController.getRoleById);


module.exports = router;