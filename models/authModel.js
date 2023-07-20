const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please fill your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, " Please provide a valid email"],
  },
  signature: {
    type: String,
  },

  password: {
    type: String,
    required: true,
    minLength: 6,
    select: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
