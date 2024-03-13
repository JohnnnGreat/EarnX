const { AddProduct, GetAllProducts } = require("../Controllers/Product");

const router = require("express").Router();

router.post("/add", AddProduct);
router.get("/getallproducts/:id", GetAllProducts);

module.exports = router;
