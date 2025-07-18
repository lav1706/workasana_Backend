const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskPriority,
  updateTaskStatus,
  FilterByKey,
} = require("../controllers/task.controller");
const verifyUser = require("../middleware/auth.middleware");

router.post("/", verifyUser, createTask);
router.get("/", verifyUser, getAllTasks);
router.get("/filter", verifyUser, FilterByKey);
router.get("/:id", verifyUser, getTaskById);
router.put("/:id", verifyUser, updateTask);
router.delete("/:id", verifyUser, deleteTask);

router.patch("/:id/priority", verifyUser, updateTaskPriority);
router.patch("/:id/status", verifyUser, updateTaskStatus);
module.exports = router;
