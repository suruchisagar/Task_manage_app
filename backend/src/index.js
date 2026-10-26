const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
import projectRoutes from "./routes/projectRoutes.js";

app.use("/api/projects", projectRoutes);

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Task Management API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});