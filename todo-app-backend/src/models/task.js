import mongoose from "mongoose";

const task = new mongoose.Schema({
  id: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    maxlength: 255,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "in progress", "completed"],
    default: "pending",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Task', task);
