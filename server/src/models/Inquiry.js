// models/Inquiry.js
import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, lowercase: true, trim: true },
    phone:   { type: String, trim: true },
    country: { type: String, required: true },
    inquiry: { type: String, required: true },
    date:    { type: String },
    stay:    { type: String, required: true },
    message: { type: String, required: true },
    status:  { type: String, enum: ["new", "read", "replied"], default: "new" },
  },
  { timestamps: true }
);

export default mongoose.model("Inquiry", inquirySchema);
