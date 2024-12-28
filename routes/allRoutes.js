const express = require("express");
const router = express.Router();
var moment = require('moment');
const DataSend = require("../models/customerSchema");
const userConrollers = require("../controllers/userControllers")

router.get("/", userConrollers.getDataIndex);
router.get("/add", userConrollers.addUser);
router.get("/edit/:id", userConrollers.editUser);
router.get("/view/:id", userConrollers.viewUser);
router.post("/user/add.html", userConrollers.insertData);
router.post("/search", userConrollers.searchData);
router.delete("/edit/:id", userConrollers.deleteData);
router.put("/update/:id", userConrollers.updataData);

module.exports = router;