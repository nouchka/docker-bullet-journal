const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const UsersSchema = mongoose.Schema({
   username: {
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

router.get("/:login", async (req, res) => {
   const [username, password] = req.params.login.split("-");

   try {
      const user = await User.find({ username: username, password: password });
      console.log(user);
      res.json(user);
   } catch (err) {
      console.log(err);
   }
});

router.post("/", async (req, res) => {
   const user = new User(req.body);

   try {
      const newUser = await user.save();
      res.json(newUser);
   } catch (err) {
      console.log(err);
   }
});

router.delete("/:userId", async (req, res) => {
   try {
      const deletedUser = await User.findOneAndDelete({
         _id: req.params.userId,
      });
      res.json(deletedUser);
   } catch (err) {
      console.log(err);
   }
});

router.put("/:userId", async (req, res) => {
   try {
      const updatedUser = await User.findOneAndUpdate(
         { _id: req.params.userId },
         req.body,
         { new: true }
      );
      res.json(updatedUser);
   } catch (err) {
      console.log(err);
   }
});

module.exports = router;
