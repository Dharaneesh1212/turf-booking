import Booking from "../models/bookingmodel.js";

// create
export const create = async (req, res) => {
  try {
    const turf = new Booking(req.body);
    await turf.save();
    res.status(201).json({ success: true, data: turf });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get all
export const allBookings = async (req, res) => {
  try {
    const getall = await Booking.find();
    res.status(200).json({ success: true, data: getall });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get by name
export const bookingsByName = async (req, res) => {
  try {
    const byName = await Booking.find({ username: req.params.username });
    if (!byName.length) {
      return res.status(404).json({
        success: false,
        message: "No Bookings found",
      });
    }
    res.status(200).json({ success: true, data: byName });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// delete
export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSlot = await Booking.findByIdAndDelete(id);
    if (!deleteSlot) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
