import { Schema, model } from "mongoose";

const cardSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      
    },
    bank_emisor: {
      type: String,
      required: true
    },
    bank: {
      type: String,
      enum: ["mastercard", "visa"],
      required: true,
      default: "unknown",
    },
    expiration_date: {
      type: String,
      required: true
    },
    user_card: {
      type: String,
      required: true
    },
    user_number: {
      type: Number,
      required: true
    },
    cvv: {
      type: Number,
      required: true
    },
    saved:{
      type:Boolean
    },
    id_user: {
      type: Schema.Types.ObjectId,
      required: true
    },
  },
  { timestamps: true, versionKey: false }
);

export default model("CardModel", cardSchema);
