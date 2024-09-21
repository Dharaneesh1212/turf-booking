import Booking from "../models/bookingmodel.js";

export const create = async (req, res) => {
  try {
    const turf = new Booking(req.body);
    await turf.save();
    res.status(201).json({ success: true, data: turf });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
