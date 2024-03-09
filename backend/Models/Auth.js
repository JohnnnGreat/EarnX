const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  verificationCode: {
    type: String,
  },
});

const AuthModel = mongoose.model("Auth", AuthSchema);

module.exports = AuthModel;
