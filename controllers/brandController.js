 const Brand = require("../models/brandModel")
 
 
 const createBrand = async(req, res) => {
  const {name} = req.body
  try {
    const newBrand = await Brand.create({name})
    res.status(200).send({ message: "Brand created successfully", success:true });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

// http://localhost:7000/api/brand/create

// {
//   "name":"puma"
// }

 const getAllBrands = async(req, res) => {
  try {
    const brands = await Brand.findAll()
    res.status(200).send({ brands:brands, success:true });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

 const getBrandByID = async (req, res) => {
  try {
    const { id } = req.body;
    const brands = await Brand.findByPk(id);

    if (brands) {
      res.status(200).send({ success: true, brands });
    } else {
      res.status(404).send({ success: false, message: "Brand not found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Server error" });
  }
};


 const updateBrand = (req, res) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

 const deleteBrand = (req, res) => {
  try {
    res.status(200).send({ message: "success" });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

module.exports = {
    createBrand, getAllBrands, getBrandByID, updateBrand, deleteBrand
}
