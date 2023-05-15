import { Schema, model } from "mongoose";


const activitySchema = new Schema(
  {
    type: {
      type: String,
    },
    id_receiver: {
        type: String,
    },
    id_transmitter: {
      type: String,
    },
    amount: {
      type: Number,
    },
    date_activity: {
      type: String,
    },
    id_user: {
      type: String,
    }
  },
  { timestamps: true, versionKey: false }
);

export default model("ActivityModel", activitySchema);