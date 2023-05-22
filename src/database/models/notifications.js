import { Schema, model } from "mongoose";

const notificationSchema = new Schema(
  {
    destinyAccountId: {
      type: Schema.Types.ObjectId,
      ref:'userModel'
    },
    message: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
      enum:["transfer"]
    }
  },
  { timestamps: true, versionKey: false }
);


export default model("NotificationModel", notificationSchema);
