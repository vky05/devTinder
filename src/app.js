import { createRequire } from "module";
const require = createRequire(import.meta.url);



const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user").default;
//console.log("abc", User.default);


const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  // const user = new User({
  //   firstName: "Vicky ",
  //   lastName: "srivastava",
  //   emailId: "ksrivastava@gmail.com",
  //   password: "22332313131",
  // });
  console.log("req.body", req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send(`Error saving the user: ${err.message}`);
  }
});

connectDB
  .connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected", err);
  });
