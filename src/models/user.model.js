import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
