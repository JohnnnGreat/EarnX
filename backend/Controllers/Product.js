const ProductModel = require("../Models/Products");

const AddProduct = async (req, res) => {
  const { name, price, type, duration, image } = req.body;
  try {
    const product = await ProductModel.create({
      name,
      price,
      status: "Unpublished",
      sales: 0,
      revenue: 0,
      image: image ? image : "",
      type,
      duration,
    });

    res
      .status(201)
      .json({ mesage: "Product Added Succesfully", success: true, product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "An Error Occured", success: false });
  }
};

module.exports = {
  AddProduct,
};
