const router = require("express").Router();
const userRoute = require("./api/user");
const authRoute = require("./api/auth");

router.use("/user", userRoute);
router.use("/auth", authRoute);

module.exports = router;
