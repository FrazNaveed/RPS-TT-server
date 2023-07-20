const mongoose = require("mongoose");

const validCategories = [
  "sedan",
  "suv",
  "hatchback",
  "coupe",
  "convertible",
  "truck",
  "van",
  "other",
];

const carSchema = new mongoose.Schema(
  {
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
          return /^[A-Z]{2}-[0-9]{2}-[A-Z]{1,2}-[0-9]{1,4}$/.test(value);
        },
        message: (props) =>
          `${props.value} is not a valid registration number! Format should be: AB-12-CD-1234`,
      },
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
