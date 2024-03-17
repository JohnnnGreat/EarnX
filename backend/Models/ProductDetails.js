const mongoose = require("mongoose");

const ProductDetailsSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  url: { type: String },
  customDomain: { type: String },
  cover: { type: String },
  thumbnail: { type: String },
  productCta: { type: String },
  summary: { type: String },
  inviteCustomersCircle: { type: Boolean },
  inviteCustomerDiscord: { type: Boolean },
  pricing: { type: String },
  allowCustomerPayChoices: { type: Boolean },
  version: { type: String },
  limitProductSales: { type: Boolean },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const ProductDetails = mongoose.model("ProductDetails", ProductDetailsSchema);
module.exports = ProductDetails;
