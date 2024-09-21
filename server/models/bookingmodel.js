import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    required: true,
  },
  day: {
    type: String,
    required: true,
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  timing: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
    unique: true,
    match: /^[0-9]{6}$/,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
