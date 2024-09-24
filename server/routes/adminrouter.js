import express from "express";
import {
  addingImage,
  gettingImage,
  editingImage,
  deletingImage,
} from "../controllers/admincontroller.js";

const router = express.Router();

// POST => http://localhost:8000/admin/addingimage
router.post("/addingimage", addingImage);

// GET => http://localhost:8000/admin/gettingimage
router.get("/gettingimage", gettingImage);

// PUT => http://localhost:8000/admin/editingimage
router.put("/editingimage", editingImage);

// DELETE => http://localhost:8000/admin/deletingimage
router.delete("/deletingimage", deletingImage);

export default router;
