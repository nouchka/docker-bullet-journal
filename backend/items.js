const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Schema
const ItemsSchema = mongoose.Schema({
   userId: {
      type: String,
      required: true,
   },
   content: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      required: true,
   },
   completed: {
      type: Boolean,
      required: true,
   },
   category: String,
   dateTime: String,
});

const Item = mongoose.model("Item", ItemsSchema);

// Routes

router.get("/:userId", async (req, res) => {
   try {
      const userItems = await Item.find({ userId: req.params.userId });
      console.log(userItems);
      res.json(userItems);
   } catch (err) {
      console.log(err);
   }
});

router.post("/:userId", async (req, res) => {
   console.log(req.body);
   const item = new Item({
      ...req.body,
      userId: req.params.userId,
   });

   try {
      const newItem = await item.save();
      res.json(newItem);
   } catch (err) {
      console.log(err);
   }
});

router.delete("/:itemId", async (req, res) => {
   try {
      const deletedItem = await Item.findOneAndDelete({
         _id: req.params.itemId,
      });
      res.json(deletedItem);
   } catch (err) {
      console.log(err);
   }
});

router.put("/:itemId", async (req, res) => {
   try {
      const updatedItem = await Item.findOneAndUpdate(
         { _id: req.params.itemId },
         req.body,
         { new: true }
      );
      res.json(updatedItem);
   } catch (err) {
      console.log(err);
   }
});

module.exports = router;
