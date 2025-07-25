const express = require("express");
const router = express.Router();
const {
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeam,
  deleteTeam,
  removeMemberFromTeam,
  addMemberToTeam,
} = require("../controllers/team.controller");
const verifyUser = require("../middleware/auth.middleware");

router.post("/", verifyUser, createTeam);
router.get("/", verifyUser, getAllTeams);
router.get("/:id", verifyUser, getTeamById);
router.put("/:id", verifyUser, updateTeam);
router.delete("/:id", verifyUser, deleteTeam);
router.post("/:teamId/member", verifyUser, addMemberToTeam);
router.delete("/:teamId/member", verifyUser, removeMemberFromTeam);

module.exports = router;
