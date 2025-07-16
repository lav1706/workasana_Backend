const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
} = require("../controllers/user.controller");
const verifyUser = require("../middleware/auth.middleware");
const { register, login } = require("../controllers/auth.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/", verifyUser, getAllUsers);
router.get("/:id", verifyUser, getUserById);
router.put("/:id", verifyUser, editUser);
router.delete("/:id", verifyUser, deleteUser);

module.exports = router;
