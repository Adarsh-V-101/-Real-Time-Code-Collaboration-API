const express = require("express");
const userSchema = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const islogin = require("../utilities/loginMiddleware")

exports.home = (req, res) => {
  res.render("home");
};

exports.getLogin = (req, res) => {
  res.render("login");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.postSignup = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await userSchema.findOne({ email });
  if (!existingUser) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
       const user = await userSchema.create({
          username: name,
          email,
          password: hash,
        });
        const token = jwt.sign({ email: user.email, id: user._id }, "jadupanti");
        res.cookie("token", token);
      });
    });
    res.status(200);
    res.redirect("/");
  } else {
    res.render("default", { message: "User already exists" });
  }
};

exports.postLogin = (req, res) => {
  const { email, password } = req.body;

  const user = userSchema.findOne({ email });
  bcrypt.compare(password, user.password, function (err, result) {
    if (result == true) {
        const token = jwt.sign({ email: email, id: user._id }, "jadupanti");
        res.cookie("token", token);
        res.status(200);
      res.redirect("/");    
    }
  });
};
