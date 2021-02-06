const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

// Routes
const itemsRoute = require("./routes/items.js");
const habitsRoute = require("./routes/habits.js");
const usersRoute = require("./routes/users.js");

app.use("/api/items", itemsRoute);
app.use("/api/habits", habitsRoute);
app.use("/api/users", usersRoute);

app.get("/", (req, res) => {
   res.send("Vue Bullet Journal Server");
});

if (process.env.NODE_ENV === "production") {
   app.use(express.static(__dirname + "/public"));

   app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

mongoose.connect(
   process.env.dbConnection,
   { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
   () => console.log("Connected to database.")
);

app.listen(port, () => console.log(`Server started on port ${port}`));
