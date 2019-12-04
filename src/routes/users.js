const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")

// router.get("/", userController.index);
router.get("/users/sign_up", userController.signUp);
router.post("/users", userController.create);
router.post("/users/sign_in", userController.signIn);
router.get("/users/log_out", userController.logOut);
router.post("/users/update", userController.updateSender, userController.updateReceiver);

module.exports = router;
