const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  tableId: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  guestName: { type: String, required: true },
  guestPhone: { type: String, required: true },
  specialRequest: { type: String, default: "" },
});

module.exports = mongoose.model("Booking", bookingSchema);
