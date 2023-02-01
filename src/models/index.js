const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://phutran:1@demo.ixz9t2a.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDb,
};
