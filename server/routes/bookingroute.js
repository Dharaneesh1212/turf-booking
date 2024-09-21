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
router.get("/all", allBookings);

// GET: http://localhost:8000/turf/getbyname
router.get("/getbyname/:username", bookingsByName);

// DELETE: http://localhost:8000/turf/delete
router.delete("/:id", deleteBooking);

export default router;
