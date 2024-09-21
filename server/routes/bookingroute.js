import express from "express";
import { create } from "../controllers/bookingcontroller.js";

const router = express.Router();

// POST: http://localhost:8000/turf/slots
router.post("/slots", create);

export default router;
