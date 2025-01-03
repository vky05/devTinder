import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const mongoose = require("mongoose");

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kslearning24:fg11ckFt1QurYQg5@nodelearning.bgl4w.mongodb.net/"
  );
};

// connectDB().then(() => {
//   console.log("Database connection established");
// });
//module.exports = connectDB;
 export default connectDB;
//console.log("vicky",connectDB());
 //export default connectDB;
// main().catch(err => console.log(err));


// const kittySchema = new mongoose.Schema({
//   name: String
// });
// const Kitten = mongoose.model('Kitten', kittySchema);
// const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

//const URI = 'mongodb+srv://kslearning24:fg11ckFt1QurYQg5@nodelearning.bgl4w.mongodb.net/'
// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb+srv://kslearning24:fg11ckFt1QurYQg5@nodelearning.bgl4w.mongodb.net/';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'HelloWorld';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('User');

//   const findResult = await collection.find({}).toArray();
//   console.log('Found documents =>', findResult);
//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());
