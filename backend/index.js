const express = require("express");
const AuthRoutes = require("./Routes/Auth");
const ProductRoutes = require("./Routes/Products");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
//Middlewares
app.use(cors());
app.use(express.json());
app.use("/auth", AuthRoutes);
app.use("/product", ProductRoutes);

const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.json({ message: "working perfectly" });
});

mongoose
  .connect(
    "mongodb+srv://johnossai20:JohnO@mycluster.tyr5c0g.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
