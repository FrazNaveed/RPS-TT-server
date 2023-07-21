const mongoose = require('mongoose');
const validator = require('validator');

const AuthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please fill your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, ' Please provide a valid email'],
  },
  address: {
    type: String,
  },

  password: {
    type: String,
  },
});

const Auth = mongoose.model('User', AuthSchema);
module.exports = Auth;
