const {
  AddProduct,
  GetAllProducts,
  GetProductDetails,
} = require("../Controllers/Product");

const router = require("express").Router();

router.post("/add", AddProduct);
router.get("/getallproducts/:id", GetAllProducts);
router.get("/getproductdetails/:id", GetProductDetails);

module.exports = router;
