import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
    },
    alias: {
      type: String,
      unique: true
    },
    cvu: {
      type: Number,
      unique: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    urlProfile: {
      type: String
    },
    dni: {
      type: Number,
      unique: true
    },
    fullname: {
      type: String
    },
    phone: {
      type: Number
    },
    address: {
      type: String
    },
    balance: {
      type: Number,
      float: true
    },
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: "CardModel"
      }
    ]
  },
  { timestamps: true, versionKey: false }
);

export default model("UserModel", userSchema);
