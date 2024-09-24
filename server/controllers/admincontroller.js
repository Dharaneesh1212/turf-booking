import Admin from "../models/adminmodel.js";

// adding image
export const addingImage = async (req, res) => {
  try {
    const adminImage = new Admin(req.body);
    await adminImage.save();
    res.status(201).json({ success: true, data: adminImage });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// getting image
export const gettingImage = async (req, res) => {
  try {
    const getImg = await Admin.find();
    res.status(200).json({ success: true, data: getImg });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// deleting image
export const deletingImage = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
