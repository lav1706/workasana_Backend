const Project = require("../model/project.model");

// Create Project
const createProject = async (req, res) => {
  try {
    const { name, description, status = "TO DO" } = req.body;

    const existing = await Project.findOne({ name });
    if (existing)
      return res.status(400).json({ message: "Project already exists" });

    const project = new Project({ name, description });
    const saved = await project.save();

    res.status(201).json({ message: "Project created", project: saved });
  } catch (error) {
    res.status(500).json({ message: "Error creating project", error });
  }
};

// Get All Projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    if (projects.length !== 0) {
      res.status(200).json(projects);
    } else {
      res.status(200).json({ message: "No Project found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
};

// Get Project by ID
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Not found" });

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Error fetching project", error });
  }
};

// Update Project
const updateProject = async (req, res) => {
  try {
    const { name, description, status } = req.body;

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      { name, description, status },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ message: "Project updated", project: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating project", error });
  }
};

// Delete Project
const deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project", error });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
