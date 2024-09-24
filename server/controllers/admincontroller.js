import Admin from "../models/adminmodel.js";

export const adImage = async (req, res) => {
  try {
    const adminImage = new Admin(req.body);
    await adminImage.save();
    res.status(201).json({ success: true, data: adminImage });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
