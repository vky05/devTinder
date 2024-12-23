const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Hi Vicky Srivastava");
});
app.use("/test", (req, res) => {
  res.send("test wala path");
});
app.listen(5555, () => {
  console.log("server is successfully listening on port 5555");
});
