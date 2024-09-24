import Admin from "../models/adminmodel.js";

// adding image
export const addingImage = async (req, res) => {
  try {
    const addImg = new Admin(req.body);
    await addImg.save();
    res.status(201).json({ success: true, data: addImg });
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
    const { id } = req.params;
    const deleteImg = await Admin.findByIdAndDelete(id);
    if (!deleteImg) {
      return res.status(404).json({ success: false, message: "Image not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
