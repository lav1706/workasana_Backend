const express = require("express");
const router = express.Router();
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  updateProjectStatus,
} = require("../controllers/project.controller");
const verifyUser = require("../middleware/auth.middleware");

router.post("/", verifyUser, createProject);
router.get("/", verifyUser, getAllProjects);
router.get("/:id", verifyUser, getProjectById);
router.put("/:id", verifyUser, updateProject);
router.delete("/:id", verifyUser, deleteProject);

module.exports = router;
