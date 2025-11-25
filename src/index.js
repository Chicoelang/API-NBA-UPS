import express from "express";
import dotenv from "dotenv";
import teamRoutes from "./routes/teamRoutes.js";
import coachRoutes from "./routes/coachRoutes.js";
import playerRoutes from "./routes/playerRoutes.js";
import standingsRoutes from "./routes/standingsRoutes.js";
import boxScoreRoutes from "./routes/boxScoreRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/api/teams", teamRoutes);
app.use("/api/coaches", coachRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/standings", standingsRoutes);
app.use("/api/box-scores", boxScoreRoutes);

app.listen(port, () => {
  console.log('Server running on port ${port}');
});