const Booking = require("../models/booking");

// Create a booking
exports.createBooking = async (req, res) => {
  try {
    const { tableId, date, time, guestName, guestPhone, specialRequest } =
      req.body;

    if (!tableId || !date || !time || !guestName || !guestPhone) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    const newBooking = new Booking({
      tableId,
      date,
      time,
      guestName,
      guestPhone,
      specialRequest,
    });
    await newBooking.save();

    res
      .status(201)
      .json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
