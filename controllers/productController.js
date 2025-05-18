// const sequelize = require('../config/db');
const { col } = require('sequelize');
const Product = require('../models/productModel')
const Category = require("../models/categoryModel")
const Brand = require('..//models/brandModel')


const createProduct = async(req,res)=>{
    //   const {name} = req.body
    try {
        const newProduct = await Product.create(req.body)
        res.status(200).send({message:"Product create successfully", success:true })
    } catch (error) {
            res.status(500).send({ error: error });
    }

}

const  getAllProducts = async(req,res)=>{
 try {
    const products = await Product.findAll()
        res.status(200).send({products:products, success:true })
    } catch (error) {
            res.status(500).send({ error: error });
    }
}

const getProductByID = async(req,res)=>{
 try {
    const {id} = req.body
    const products = await Product.findByPk(id)

    if(products){
        res.status(200).send({success:true, products })
        }else{
            res.status(400).send({success:false, message:'Product not found'})
        }
    } catch (error) {
            res.status(500).send({ error: error });
    }
}

const updateProduct = async(req,res)=>{
 try {
    const id = req.params.id;
    const name = req.body.name;
    const price = req.body.price;
    const Quantity = req.body.Quantity;
    console.log(id)

    console.log(price, Quantity)
    const products = await Product.update({name,price,Quantity}, {where:{id:id}})
        res.status(200).send({message:"Product Updated Successfully" })
    } catch (error) {
            res.status(500).send({ error: error });
    }
}

const deleteProduct = async(req,res)=>{
 try {
    const id = req.params.id
    const products = await Product.destroy({where:{id:id}})
        res.status(200).send({message:"success", })
    } catch (error) {
            res.status(500).send({ error: error });
    }
}

// const getProductsByCategory = async (req, res) => {
//     try {
//         const id = req.params.id; 
//         const products = await Product.findAll({
//             where:{id:someID},
//             include:[Category, Brand]
//         })

//         res.status(200).send({
//             message: "Successfully retrieved products by category",
//             products
//         });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).send({ message: "Failed to retrieve products by category" });
//     }
// };

// const getProductsByBrand = async(req,res)=>{
// try {
//     const id = req.body.id
//     const products = await Product.findAll({where:{id:id}})
//     res.status(200).send({message:"Products successfully retrieved by brand", success:true})
// } catch (error) {
//     res.status(500).send({message:"Products can not retrieved"}) 
// }
// }





module.exports = {
    createProduct, getAllProducts, getProductByID, updateProduct, deleteProduct, getProductsByCategory, getProductsByBrand
}