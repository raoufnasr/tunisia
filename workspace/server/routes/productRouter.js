var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");



router.get('/getAll', productController.getAllProduct);
router.post('/add', productController.newProduct);
router.put('/update', productController.updateProduct);
router.delete('/delete', productController.deleteProduct);
router.post('/getproductbyid', productController.getProductById);
router.post('/getProductbyCategory', productController.getProductbyCategory);

module.exports = router;