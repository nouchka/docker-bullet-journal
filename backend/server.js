const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
app.use(express.json());
const port = 5000;

// Routes
const itemsRoute = require("./items.js");
const habitsRoute = require("./habits.js");
const usersRoute = require("./users.js");

app.use("/api/items", itemsRoute);
app.use("/api/habits", habitsRoute);
app.use("/api/users", usersRoute);

app.get("/", (req, res) => {
   res.send("Bullet Journal Backend");
});

mongoose.connect(
   process.env.dbConnection,
   { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
   () => console.log("Connected to database.")
);

app.listen(port, () => console.log(`Server started on port ${port}`));
