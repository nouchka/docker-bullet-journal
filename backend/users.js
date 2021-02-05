const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv");

const UsersSchema = mongoose.Schema({
   email: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
});

const User = mongoose.model("User", UsersSchema);

// Routes

router.post("/token", async (req, res) => {
   try {
      const verify = jwt.verify(req.body.token, process.env.token);
      const userId = verify._id;
      res.json(userId);
   } catch (err) {
      res.json("error");
   }
});

router.post("/login", async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await User.findOne({ email: email });
      if (!user) {
         res.json(
            "This user does not exist. Please try again or sign up for a new account."
         );
      } else {
         const correctPw = await bcrypt.compare(password, user.password);
         if (!correctPw) {
            res.json("Incorrect password. Please try again.");
         } else {
            const token = jwt.sign({ _id: user._id }, process.env.token);
            res.header("auth-token", token);
            res.json({
               token: token,
               user: { _id: user._id, email: user.email },
            });
         }
      }
   } catch (err) {
      console.log(err);
   }
});

router.post("/signup", async (req, res) => {
   const { email, password } = req.body;
   try {
      const userExist = await User.findOne({ email: email });
      if (userExist !== null) {
         res.json("A user with this email already exists. Please try again.");
      } else {
         const salt = await bcrypt.genSalt(10);
         const hashPw = await bcrypt.hash(password, salt);

         const user = new User({
            email: email,
            password: hashPw,
         });
         const newUser = await user.save();
         const token = jwt.sign({ _id: user._id }, process.env.token);

         res.header("auth-token", token);
         res.json({
            token: token,
            user: { _id: newUser._id, email: newUser.email },
         });
      }
   } catch (err) {
      console.log(err);
   }
});

// router.delete("/:userId", async (req, res) => {
//    try {
//       const deletedUser = await User.findOneAndDelete({
//          _id: req.params.userId,
//       });
//       res.json(deletedUser);
//    } catch (err) {
//       console.log(err);
//    }
// });

// router.put("/:userId", async (req, res) => {
//    try {
//       const updatedUser = await User.findOneAndUpdate(
//          { _id: req.params.userId },
//          req.body,
//          { new: true }
//       );
//       res.json(updatedUser);
//    } catch (err) {
//       console.log(err);
//    }
// });

module.exports = router;
