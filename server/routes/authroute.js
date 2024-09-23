import express from "express";
import {
  signup,
  signin,
  forgetpassword,
  resetpassword,
  verify,
} from "../controllers/authcontroller.js";

const router = express.Router();

// POST => http://localhost:8000/user/register
router.post("/register", signup);

// POST => http://localhost:8000/user/login
router.post("/login", signin);

// POST => http://localhost:8000/user/forgetpassword
router.post("/forgetpassword", forgetpassword);

// POST => http://localhost:8000/user/resetpassword
router.post("/resetpassword/:token", resetpassword);

// POST => http://localhost:8000/user/verify
router.get("/verify", verify);


export default router;