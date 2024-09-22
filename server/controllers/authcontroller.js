import { User } from "../models/authmodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

// Signup

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "User already exist" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newuser = new User({
      username,
      email,
      password: hashpassword,
    });

    await newuser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Singin

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not registered" });
    }
    const validpassword = await bcrypt.compare(password, user.password);
    if (!validpassword) {
      return res
        .status(401)
        .json({ success: false, message: "Password is incorrect" });
    }

    const token = jwt.sign({ email: user.email }, process.env.KEY, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 3600000,
    });

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Forget-password

export const forgetpassword = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Reset-password

export const resetpassword = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Verify

export const verify = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
