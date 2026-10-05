import mongoose from "mongoose";
const BloodRequestSchema = new mongoose.Schema({
  recipientName: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true
  },
  bloodGroupNeeded: {
    type: String,
    required: true,
    enum: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"]
  },
  areaName: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  urgency: {
    type: String,
    enum: ["normal", "urgent", "critical"],
    default: "normal"
  },
  status: {
    type: String,
    enum: ["pending", "fulfilled", "cancelled"],
    default: "pending"
  }
});

export default mongoose.model("BloodRequest", BloodRequestSchema);