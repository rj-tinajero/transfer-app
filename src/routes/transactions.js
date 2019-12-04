const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/transactionController");

router.post("/users/update", transactionController.create);

module.exports = router;