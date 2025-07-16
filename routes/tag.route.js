const express = require("express");
const router = express.Router();
const {
  createTag,
  getAllTags,
  getTagById,
  updateTag,
  deleteTag,
} = require("../controllers/tag.controller");
const verifyUser = require("../middleware/auth.middleware");

router.post("/", verifyUser, createTag);
router.get("/", verifyUser, getAllTags);
router.get("/:id", verifyUser, getTagById);
router.put("/:id", verifyUser, updateTag);
router.delete("/:id", verifyUser, deleteTag);

module.exports = router;
