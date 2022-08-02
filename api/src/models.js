import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  vote: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  sex: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);

export default User;