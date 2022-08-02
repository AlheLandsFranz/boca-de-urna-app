import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
let { URL_MONGO } = process.env;
// import { MongoClient, ServerApiVersion } from 'mongodb';




export const connectDB = async () => {
//   try {
//     await client.connect();
// // database and collection code goes here
// const db = client.db("test");
// const coll = db.collection("votes");
// // find code goes here
// const cursor = coll.find();
// // iterate code goes here
// await cursor.forEach(console.log);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
mongoose
  .connect(URL_MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("DB Connected!");
    let connection = mongoose.connection;
    console.log(connection, "connnection")
    // run logic once db is connected.
    // connection.db.collection("votesdb", function (err, collection) { 
    //   collection.find({}).toArray(function (err, data) {
    //     console.log(data); // it will print your collection data
    //   })
    })
  .catch(err => {
    console.log(err);
  });

}

// connectDB().catch(console.dir);


