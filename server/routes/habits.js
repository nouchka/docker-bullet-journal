const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Schema
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

// Model
const Habit = mongoose.model("Habit", HabitsSchema);

// Routes

router.get("/:userId", async (req, res) => {
   const userHabits = await Habit.find({ userId: req.params.userId });
   res.json(userHabits);
});

router.post("/:userId", async (req, res) => {
   const habit = new Habit({
      ...req.body,
      userId: req.params.userId,
   });

   const newHabit = await habit.save();
   res.json(newHabit);
});

router.delete("/:habitId", async (req, res) => {
   const deleteHabit = await Habit.findOneAndDelete({
      _id: req.params.habitId,
   });
   res.json(deleteHabit);
});

router.put("/:habitId", async (req, res) => {
   const updateHabit = await Habit.findOneAndUpdate(
      {
         _id: req.params.habitId,
      },
      req.body,
      { new: true }
   );
   res.json(updateHabit);
});

module.exports = router;
