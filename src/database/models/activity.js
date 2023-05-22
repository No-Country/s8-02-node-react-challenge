import { Schema, model } from "mongoose";


const activitySchema = new Schema(
  {
    UserAccountId: {
      type: Schema.Types.ObjectId,
      ref:"UserModel"
    },
    destinyAccountId: {
      type: Schema.Types.ObjectId,
      ref:"UserModel"
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