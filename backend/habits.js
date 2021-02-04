const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
// const checkToken = require('./checkToken')

//Schema
const HabitsSchema = mongoose.Schema({
   userId: {
      type: String,
      required: true,
   },
   content: {
      type: String,
      required: true,
   },
   abbr: {
      type: String,
      required: true,
   },
   datesCompleted: [String],
});

const Habit = mongoose.model("Habit", HabitsSchema);

//Routes

router.get("/:userId", async (req, res) => {
   try {
      const userHabits = await Habit.find({ userId: req.params.userId });
      res.json(userHabits);
   } catch (err) {
      console.log(err);
   }
});

router.post("/:userId", async (req, res) => {
   const habit = new Habit({
      ...req.body,
      userId: req.params.userId,
   });

   try {
      const newHabit = await habit.save();
      res.json(newHabit);
   } catch (err) {
      console.log(err);
   }
});

router.delete("/:habitId", async (req, res) => {
   try {
      const deleteHabit = await Habit.findOneAndDelete({
         _id: req.params.habitId,
      });
      res.json(deleteHabit);
   } catch (err) {
      console.log(err);
   }
});

router.put("/:habitId", async (req, res) => {
   try {
      const updateHabit = await Habit.findOneAndUpdate(
         {
            _id: req.params.habitId,
         },
         req.body,
         { new: true }
      );

      res.json(updateHabit);
   } catch (err) {
      console.log(err);
   }
});

module.exports = router;
