const jwt = require("jsonwebtoken");
require("dotenv");

module.exports = function (req, res, next) {
   const token = req.header("auth-token");
   console.log(token);
   if (!token) {
      return res.status(401).send("Access denied");
   }
   try {
      const check = jwt.verify(token, process.env.token);
      req.user = check;
      next();
   } catch (err) {
      res.state(400).send("error");
   }
};
