const mongoose = require("mongoose");

//This is the Profile Schema

const profileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  profileImage: {
    type: String,
    required: true,
  },

  profileVerified: {
    type: Boolean,
  },

  country: {
    type: String,
    default: "NG",
  },
});

const profileModel = mongoose.model("Profile", profileSchema);

module.exports = profileModel;
