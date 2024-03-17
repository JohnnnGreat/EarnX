const express = require("express");
const AuthRoutes = require("./Routes/Auth");
const ProductRoutes = require("./Routes/Products");
const ProductDetailsRouter = require("./Routes/ProductDetails");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/auth", AuthRoutes);
app.use("/product", ProductRoutes);
app.use("/productdetails", ProductDetailsRouter);

const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.json({ message: "working perfectly" });
});

const uri = "mongodb://localhost:27017/";

mongoose
  .connect("mongodb://0.0.0.0:27017/")
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
