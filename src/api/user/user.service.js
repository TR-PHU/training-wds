const User = require("./models/user");

module.exports = {
  updateUserInfo: async (userId, { fullName }) => {
    const user = await User.findById(userId);
    if (!user) {
      return {
        message: "User not found",
        statusCode: 404,
        data: null,
      };
    }

    user.fullName = fullName;
    await user.save();

    return {
      message: "User info updated successfully",
      statusCode: 200,
      data: null,
    };
  },
};
