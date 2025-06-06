const sequelize = require("../config/db");

const {DataTypes} = require('sequelize')




const Category = sequelize.define("Category",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
},{
    tableName:"Categories",
    timestamps:false
})

// Category.hasMany(Product);
module.exports = Category 