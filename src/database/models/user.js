import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
     
    },
    alias: {
      type: String
    },
    cvu: {
      type: Number,
      
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    urlProfile: {
      type: String
    },
    dni: {
      type: Number
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
