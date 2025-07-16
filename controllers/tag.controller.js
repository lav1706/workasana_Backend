const Tag = require("../model/tag.model");

// Create new tag
const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const existingTag = await Tag.findOne({ name });
    if (existingTag) {
      return res.status(400).json({ message: "Tag already exists" });
    }

    const tag = new Tag({ name });
    const saved = await tag.save();

    res.status(201).json({ message: "Tag created", tag: saved });
  } catch (error) {
    res.status(500).json({ message: "Error creating tag", error });
  }
};

// Get all tags
const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find().sort({ name: 1 });
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tags", error });
  }
};

// Get tag by ID
const getTagById = async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    if (!tag) return res.status(404).json({ message: "Tag not found" });

    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tag", error });
  }
};

// Update tag
const updateTag = async (req, res) => {
  try {
    const { name } = req.body;

    const updated = await Tag.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Tag not found" });

    res.status(200).json({ message: "Tag updated", tag: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating tag", error });
  }
};

// Delete tag
const deleteTag = async (req, res) => {
  try {
    const deleted = await Tag.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Tag not found" });

    res.status(200).json({ message: "Tag deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting tag", error });
  }
};

module.exports = {
  createTag,
  getAllTags,
  getTagById,
  updateTag,
  deleteTag,
};
