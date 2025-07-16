const Team = require("../model/team.model");

// CREATE
const createTeam = async (req, res) => {
  try {
    const { name, description, member } = req.body;

    const existing = await Team.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: "Team already exists" });
    }

    const team = new Team({ name, description, member });
    const saved = await team.save();
    res.status(201).json({ message: "Team created", team: saved });
  } catch (error) {
    res.status(500).json({ message: "Error creating team", error });
  }
};

// READ (All)
const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate("member", "-password -__v");
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: "Error fetching teams", error });
  }
};

// READ (By ID)
const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate(
      "member",
      "-password -__v"
    );
    if (!team) return res.status(404).json({ message: "Team not found" });
    res.status(200).json({ message: "Team Found", team });
  } catch (error) {
    res.status(500).json({ message: "Error fetching team", error });
  }
};

// UPDATE
const updateTeam = async (req, res) => {
  try {
    const { name, description, member } = req.body;

    const updated = await Team.findByIdAndUpdate(
      req.params.id,
      { name, description, member },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ message: "Team not found" });
    res.status(200).json({ message: "Team updated", team: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating team", error });
  }
};

// DELETE
const deleteTeam = async (req, res) => {
  try {
    const deleted = await Team.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Team not found" });
    res.status(200).json({ message: "Team deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting team", error });
  }
};
const addMemberToTeam = async (req, res) => {
  try {
    const { teamId, userId } = req.params;

    const team = await Team.findById(teamId);
    if (!team) return res.status(404).json({ message: "Team not found" });

    if (team.member.includes(userId)) {
      return res
        .status(400)
        .json({ message: "User is already a member of this team" });
    }

    team.member.push(userId);
    const updated = await team.save();

    res.status(200).json({ message: "Member added", team: updated });
  } catch (error) {
    res.status(500).json({ message: "Error adding member", error });
  }
};

// REMOVE MEMBER
const removeMemberFromTeam = async (req, res) => {
  try {
    const { teamId, userId } = req.params;

    const team = await Team.findById(teamId);
    if (!team) return res.status(404).json({ message: "Team not found" });

    const index = team.member.indexOf(userId);
    if (index === -1) {
      return res
        .status(400)
        .json({ message: "User is not a member of this team" });
    }

    team.member.splice(index, 1);
    const updated = await team.save();

    res.status(200).json({ message: "Member removed", team: updated });
  } catch (error) {
    res.status(500).json({ message: "Error removing member", error });
  }
};

module.exports = {
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeam,
  deleteTeam,
  addMemberToTeam,
  removeMemberFromTeam,
};
