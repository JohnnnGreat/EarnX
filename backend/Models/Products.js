const mongoose = require("mongoose");

// Product Schema
const productSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

  image: {
    type: String,
  },

  sales: {
    type: Number,
  },

  revenue: {
    type: Number,
  },

  price: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
  },

  type: {
    type: String,
  },

  duration: {
    type: String,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId, ref:"Auth"
  }
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
