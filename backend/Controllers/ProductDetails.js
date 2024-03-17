const ProductDetails = require("../Models/ProductDetails");

const AddProductDetails = async () => {
  const { id } = req.params;
  const product = await ProductDetails.create(req.body);

  res.status(201).json({
    product: product,
    message: "product details added successfuly",
    success: true,
  });
  try {
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

const UpdateImage = () => {
  const { id } = req.params;

  try {
  } catch (error) {}
};

module.exports = {
  UpdateImage,
  AddProductDetails,
};
