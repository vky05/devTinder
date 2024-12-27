import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
const connectDB = require("./config/database");
//import connectDB from "./config/database";
//console.log("connect", connectDB);
const app = express();
const User = require("./models/user");
// app.use("/test", (req, res) => {
//   res.send("test wala path");
// });

// app.use("/", (req, res) => {
//   res.send("Hi Vicky Srivastava");
// });

app.post("/signup",  (req, res) => {
  // const user = new User({
  //   firstName: "vicky",
  //   lastName: "srivastava",
  //   emailId: "ksrivastava@gnail.com",
  //   passwoed: "22332313131",
  // });
  // await user.save();
  res.send("user added successfully");
  // try {
  //   await user.save();
  //   res.send("user added successfully");
  // } catch (err) {
  //   res.status(400).send("error saving the user", err.message);
  // }
});
// app.listen(5555, () => {
//   console.log("server is successfully listening on port 5555");
// });

connectDB
  .connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("server is successfully listening on port 7777");
    });
  })
  .catch((err) => {
    console.error("database cannot be connected");
  });
