// const sequelize = require('../config/db');
const Product = require('../models/productModel')


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

const updateProduct = (req,res)=>{
 try {
        res.status(200).send({message:"success", })
    } catch (error) {
            res.status(500).send({ error: error });
    }
}

const deleteProduct = (req,res)=>{
 try {
        res.status(200).send({message:"success", })
    } catch (error) {
            res.status(500).send({ error: error });
    }
}


module.exports = {
    createProduct, getAllProducts, getProductByID, updateProduct, deleteProduct
}