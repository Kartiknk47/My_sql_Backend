const express = require('express')
const productController = require("../controllers/productController.js")


const router = express.Router();


router.post('/create', productController.createProduct)
router.get('/getAllProducts', productController.getAllProducts)
router.get("/getProductsByID/:id", productController.getProductByID)
router.put('/updateProducts/:id', productController.updateProduct)
router.delete("/deleteProducts/:id", productController.deleteProduct)






module.exports =  router