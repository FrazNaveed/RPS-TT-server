const mongoose = require('mongoose');
const { validCategories } = require('../constants/index');

const vehicleSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return validCategories.includes(value);
        },
        message: (props) => `${props.value} is not a valid category!`,
      },
    },
    color: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    model: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    make: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    registrationNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      validate: {
        validator: function (value) {
          return /^([A-Z]{3}-\d{4})$/.test(value);
        },
        message: (props) =>
          `${props.value} is not a valid registration number! Format should be: CDA-1234`,
      },
    },
  },
  { timestamps: true },
);

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
