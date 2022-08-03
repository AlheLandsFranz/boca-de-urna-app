import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })
let { URL_MONGO } = process.env;

async function connectDB() {

  mongoose
    .connect(URL_MONGO, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => {
      console.log("DB Connected!");
      let connection = mongoose.connection;
      console.log(connection, "connnection");
    })
    .catch(err => {
      console.log(err);
    });

}

export default connectDB;

// connectDB().catch(console.dir);


