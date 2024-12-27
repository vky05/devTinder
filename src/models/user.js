import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailID: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  age: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

//module.exports = User;
export default User;