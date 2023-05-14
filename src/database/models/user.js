import { Schema, model } from "mongoose";


const userSchema = new Schema(
  {
    username: {
      type: String,
      unique:false
    },
    alias:{
      type:String
    },
    cvu: {
      type: Number,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
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
      float:true
    }
    },
  { timestamps: true, versionKey: false }
);

export default model("UserModel", userSchema);
