const mongoose = require("mongoose");

const connectWithDb = () => {
  mongoose
    .connect(process.env.DBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Connected to database"))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectWithDb;
