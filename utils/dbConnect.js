const mongoose = require("mongoose");
const Connect = () => {
  const mongoUrl = process.env.MONGO_URL;
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((e) => console.log(e));
};
module.exports = { Connect };
