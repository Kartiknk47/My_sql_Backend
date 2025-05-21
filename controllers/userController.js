const User = require('../models/userModel')
const jwt = require("jsonwebtoken")
require ('dotenv').config()

const registerUser = async(req,res) =>{
        const {name,email,password} = req.body
    try {
        // const existingUser = findOne({email})
        // console.log(existingUser)
        // if(existingUser){
        //     res.status(200).send({message:"User already exist"})
        // }
        const newUser = await User.create({name,email,password})
        res.status(200).send({message:" User registered successfully", success:true})
    } catch (error) {
        res.status(500).send({error:error})
        
    }
}


const loginUser = async(req,res) =>{
    const {email, password} = req.body
    try {
        const loggedInUser = await User.findOne({where:{email:req.body.email, password:req.body.password},attributes:["id","isAdmin"]})
        // console.log(loggedInUser, "login User")
        const user = loggedInUser.dataValues
        console.log(user, "user data*****")

        if(loggedInUser){
        const token = jwt.sign(user, process.env.SECREATE_KEY,{expiresIn:"4h"})
            console.log(token, "token")

            res.status(200).send({message:"user login successfully", success:true, token:token})
        }
        else{
            res.status(400).send({message:"user not found"})
            
        }
    } catch (error) {
        req.user
        res.status(500).send({error:error})
    }
}

const getUserInfo = async(req,res) =>{
console.log("req.user") 
try {
    loggedInUser = await User.findOne({where:{id:req.user.id}, attributes:["id", "name", "email", "isAdmin"]})
    res.status(200).send({message:"got user info", loggedInUser:loggedInUser})
} catch (error) {
    res.status(500).send({error:error})
}
}


module.exports = {
    registerUser,loginUser,
    getUserInfo
}