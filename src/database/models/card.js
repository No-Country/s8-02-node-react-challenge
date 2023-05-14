import { Schema, model } from "mongoose";


const cardSchema = new Schema(
  {
    type: {
      type: String,
      unique: true,
    },
    bank_emisor: {
        type: String,
        unique: true,
    },
    bank: {
      type: String,
      unique: true,
    },
    expiration_date: {
      type: String,
      unique: false,
    },
    user_name: {
      type: String,
    },
    cvv: {
      type: Number,
    },
    id_user: {
      type: String,
    }
    },
  { timestamps: true, versionKey: false }
);

export default model("CardModel", cardSchema);
