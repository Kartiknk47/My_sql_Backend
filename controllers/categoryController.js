const Category = require("../models/categoryModel")

const createCategory = async(req,res)=>{
      const {name} = req.body
    try {
        const newCategory = await Category.create({name})
        res.status(200).send({message:"Category create successfully", success:true })
    } catch (error) {
            res.status(500).send({ error: error });
    }

}

const  getAllCategories = async(req,res)=>{
 try {
    const categories = await Category.findAll()
        res.status(200).send({categories:categories, success:true })
    } catch (error) {
            res.status(500).send({ error: error });
    }
}

const getCategoryByID = async(req,res)=>{
 try {
    const {id} = req.body;
    const categories = await Category.findByPk(id)

    if(categories){
        res.status(200).send({success:true, categories })
        }else{
            res.status(400).send({success:false, message:"Category not found"})
        }
    } catch (error) {
            res.status(500).send({ error: error });
    }
}

const updateCategory = (req,res)=>{
 try {
        res.status(200).send({message:"success", })
    } catch (error) {
            res.status(500).send({ error: error });
    }
}

const deleteCategory = (req,res)=>{
 try {
        res.status(200).send({message:"success", })
    } catch (error) {
            res.status(500).send({ error: error });
    }
}


module.exports = {
    createCategory, getAllCategories, getCategoryByID, updateCategory, deleteCategory
}

