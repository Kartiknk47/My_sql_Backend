const express = require('express')
const productController = require("../controllers/productController.js")


const router = express.Router();


router.post('/create', productController.createProduct)
router.get('/getAllProducts', productController.getAllProducts)
router.get("/getProductsByID/:id", productController.getProductByID)
router.put('/updateProduct/:id', productController.updateProduct)
router.delete("/deleteProduct/:id", productController.deleteProduct)
router.get("/getProductsByCategory", productController.getProductsByCategory)
router.get("/getProductsByBrand/:id",productController.getProductsByBrand)





module.exports =  router