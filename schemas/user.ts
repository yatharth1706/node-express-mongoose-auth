import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  authentication: {
    password: { type: String, select: false },
    access_token: { type: String, select: false },
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
