const { DataTypes, ForeignKeyConstraintError } = require("sequelize");
const sequelize = require("../config/db");

const Brand = require('./brandModel')
const Category = require('./categoryModel')

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(),
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Instock: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "Products",
    timestamps: true,
  });

  Product.belongsTo(Brand, {
    foreignKey:'id',
    as:'Brands'
  })

  Product.belongsTo(Category,{
    foreignKey:"id",
    as:'Categories'
    }
  )

module.exports = Product
