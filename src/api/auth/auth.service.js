const { genAuthToken } = require("../../common/jwt/genAuthToken");
const User = require("./../user/models/user");
const bcrypt = require("bcryptjs");

module.exports = {
  register: async (body) => {
    const { fullName, email, password } = body;

    const user = await User.findOne({ email });

    if (user) {
      return {
        message: "User already exists",
        statusCode: 400,
        data: null,
      };
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashPassword,
    });
    await newUser.save();

    return {
      message: "User registered successfully",
      statusCode: 200,
      data: null,
    };
  },
  login: async (body) => {
    const { email, password } = body;

    const user = await User.findOne({ email });

    if (!user) {
      return {
        message: "Wrong email or password",
        statusCode: 400,
        data: null,
      };
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (!isCorrect) {
      return {
        message: "Wrong email or password",
        statusCode: 400,
        data: null,
      };
    }
    const token = genAuthToken({
      userId: user._id,
    });

    return {
      message: "User logged in successfully",
      statusCode: 200,
      data: {
        userId: user._id,
        token,
      },
    };
  },
};
