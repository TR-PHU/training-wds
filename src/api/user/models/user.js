const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  salt: {
    type: Number,
    require: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
