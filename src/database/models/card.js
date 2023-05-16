import { Schema, model } from "mongoose";


const cardSchema = new Schema(
  {
    type: {
      type: String,
    
    },
    
    bank_emisor: {
        type: String,
      
    },
    bank: {
      type: String,
      enum:["mastercard","visa","unknown"],
      require:true,
      default:"unknown"
    },
    expiration_date: {
      type: String,
    
    },
    user_card: {
      type: String,
    },
    user_number:{
        type:Number,
      
    },
    cvv: {
      type: Number,
    },
    id_user: {
      type: Schema.Types.ObjectId,
    },
    },
  { timestamps: true, versionKey: false }
);

export default model("CardModel", cardSchema);
