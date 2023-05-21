import { Schema, model } from "mongoose";


const activitySchema = new Schema(
  {
    UserAccountId: {
      type: String,
    },
    destinyAccountId: {
        type: String,
    },
    amount: {
      type: Number,
    },

    description:{
      type:String
    }
  },
  { timestamps: true, versionKey: false }
);

export default model("ActivityModel", activitySchema);