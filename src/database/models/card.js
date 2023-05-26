import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";

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
      required: false
    },
    user_number: {
      type: Number,
      required: true
    },
    cvv: {
      type: Number,
      required: true
    },
    id_user: {
      type: Schema.Types.ObjectId,
      required: true
    },
    status:{
      type: Boolean,
      required: true
    }
  },
  { timestamps: true, versionKey: false }
);

export default model("CardModel", cardSchema);
