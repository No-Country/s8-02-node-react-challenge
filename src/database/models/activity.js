import { Schema, model } from "mongoose";


const activitySchema = new Schema(
  {
    UserAccountId: {
      type: Schema.Types.ObjectId,
      ref: "UserModel",
      require:true
    },
    destinyAccountId: {
      type: Schema.Types.ObjectId,
      ref: "UserModel"
    },
    amount: {
      type: Number,
    },

    description:{
      type:String
    },
    type:{
      type:String,
      enum:["transfer","addfunds"]
    },
    payment:{
      method:{
        type:String,
        enum:["card","balance"], // si la opcion es balance, no necesita cardId, es en efectivo.
        require:true,
      },
      cardId:{
        type: Schema.Types.ObjectId,
        ref: "UserModel"
      } 
    }
  },
  { timestamps: true, versionKey: false }
);

export default model("ActivityModel", activitySchema);