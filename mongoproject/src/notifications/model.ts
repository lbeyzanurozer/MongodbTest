import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    content: { type: String, required: true },
    campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaigns", required: true },
    createdTime: { type: Date, default: Date.now },
    updatedTime: { type: Date, default: Date.now },
    deletedTime: { type: Date, default: null },
    deleted: { type: Boolean, default: false }
});

const Notifications = mongoose.model("Notifications", notificationSchema);

    export default Notifications;

