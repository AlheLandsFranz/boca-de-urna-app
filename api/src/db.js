import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const { PORT } = process.env;


export const connectDB = async () => {
    try {
      const db = await mongoose.connect(PORT);
      console.log("Mongodb is connected to", db.connection.host);
    } catch (error) {
      console.error(error);
    }
  };