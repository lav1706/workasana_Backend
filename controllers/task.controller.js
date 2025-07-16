const Task = require("../model/task.model");

// CREATE Task
const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json({ message: "Task created", task: savedTask });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Error creating task", error });
  }
};

// GET ALL Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("project")
      .populate("team")
      .populate("owners");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

// GET Task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate("project")
      .populate("team")
      .populate("owners");

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error fetching task", error });
  }
};

// UPDATE Task
const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedTask)
      return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task updated", task: updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
};

// DELETE Task
const deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
};
// PATCH /v1/task/:id/priority
const updateTaskPriority = async (req, res) => {
  try {
    const { priority } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { priority, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Priority updated", task: updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Error updating priority", error });
  }
};
// PATCH /v1/task/:id/status
const updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Status updated", task: updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskPriority,
  updateTaskStatus,
};
