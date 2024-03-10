const { AddProduct } = require("../Controllers/Product");

const router = require("express").Router();

router.post("/add", AddProduct);

module.exports = router;
