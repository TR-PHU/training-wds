const userService = require("./user.service");

module.exports = {
  updateUserInfo: async (req, res, next) => {
    const { userId } = req.user;
    const response = await userService.updateUserInfo(userId, req.body);
    res.status(response.statusCode).json(response);
  },
};
