import express from "express";
import {
  allBookings,
  bookingsByName,
  create,
  deleteBooking,
} from "../controllers/bookingcontroller.js";

const router = express.Router();

// POST: http://localhost:8000/turf/slots
router.post("/slots", create);

// GET: http://localhost:8000/turf/all
router.post("/all", allBookings);

// GET: http://localhost:8000/turf/getbyname
router.post("/getbyname", bookingsByName);

// DELETE: http://localhost:8000/turf/delete
router.post("/delete", deleteBooking);

export default router;
