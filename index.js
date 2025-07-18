const express = require("express");
const cors = require("cors");
const app = express();
const { connectToDatabase } = require("./db/db.connect");
require("dotenv").config();
const ProjectRoutes = require("./routes/project.route");
const UserRoutes = require("./routes/user.route");
const taskRoutes = require("./routes/task.route");
const tagRoutes = require("./routes/tag.route");
const TeamRoute = require("./routes/team.route");
var corsOptions = {
  origin: "https://stunning-figolla-da6116.netlify.app",
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
connectToDatabase();

app.use("/v1/project", ProjectRoutes);
app.use("/v1/user", UserRoutes);
app.use("/v1/task", taskRoutes);
app.use("/v1/tag", tagRoutes);
app.use("/v1/team", TeamRoute);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is Connected at ${port}`);
});
