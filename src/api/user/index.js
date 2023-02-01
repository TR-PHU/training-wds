const router = require("express").Router();
const { decodeToken } = require("../../common/jwt/decodeToken");
const userController = require("./user.controller");

router.put("/", decodeToken, userController.updateUserInfo);

module.exports = router;
