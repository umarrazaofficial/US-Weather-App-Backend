const express = require("express");
const Route = express.Router();
const {Createuser, Getuser, Getsingleuser, Updateuser, Deleteuser} = require("../controller/userController");
const {Login} = require("../controller/authController");

// User Api's
Route.post("/createuser", Createuser);
Route.get("/getUser", Getuser);
Route.get("/getsingleaccount/:_id", Getsingleuser);
Route.put("/updateUser/:_id", Updateuser);
Route.delete("/deleteUser/:_id", Deleteuser);
// Login Api's
Route.post("/login", Login);

module.exports = Route;
