const ProductModel = require("../Models/Products");

const AddProduct = async (req, res) => {
  const { name, price, type, duration, image, _id } = req.body;
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
      user: _id,
    });

    res
      .status(201)
      .json({ mesage: "Product Added Succesfully", success: true, product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "An Error Occured", success: false });
  }
};

const GetAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find()
      .sort({ _id: -1 })
      .populate([
        {
          path: "user",
          select: ["email"],
        },
      ]);

    const filteredProducts = products.filter((item) => {
      return item.user._id.toString() === req.params.id;
    });

    res.status(200).json({
      message: "products Fetched Successfully",
      products: filteredProducts,
      success: true,
    });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

const GetProductDetails = async (req, res) => {
  console.log(req.params);
  try {
    const product = await ProductModel.findOne({ _id: req.params.id });
    if (!product) {
      throw new Error("Product Not Found");
    }
    console.log(product);
    res.status(200).json({
      message: "Product Fetched Successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message, success: false });
  }
};
module.exports = {
  AddProduct,
  GetAllProducts,
  GetProductDetails,
};
