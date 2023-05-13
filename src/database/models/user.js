import { Schema, model } from "mongoose";


const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    cvu: {
        type: String,
        unique: true,
      },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: false,
    },
    urlProfile: {
      type: String,
    },
    dni: {
      type: Number,
    },
    fullname: {
      type: String,
    },
    phone: {
      type: Number
    },
    address: {
      type: [String],
    },
    balance: {
      type: [String],
    }
    },
  { timestamps: true, versionKey: false }
);

export default model("UserModel", userSchema);
