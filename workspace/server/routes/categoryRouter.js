var express = require('express');
var router = express.Router();
const categoryController = require("../controllers/categoryController");



router.get('/getAll', categoryController.getAllCategory);
router.post('/add', categoryController.newCategory);
router.put('/update', categoryController.updateCategory);
router.delete('/delete', categoryController.deleteCategory);
router.post('/getcategorybyid', categoryController.getCategoryById);


module.exports = router;