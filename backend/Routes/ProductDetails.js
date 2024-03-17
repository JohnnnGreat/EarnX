const router = require("express").Router();
const {
  AddProductDetails,
  UpdateImage,
} = require("../Controllers/ProductDetails");

router.post("/addproductdetails", AddProductDetails);
router.put("/updateproductcover/:id", UpdateImage);
module.exports = router;
