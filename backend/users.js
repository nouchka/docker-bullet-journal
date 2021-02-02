const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
   username: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
});

const HabitsSchema = mongoose.Schema({
   userId: {
      type: String,
      required: true,
   },
   habit: {
      type: String,
      required: true,
   },
   abbr: {
      type: String,
      required: true,
   },
   history: [],
});
