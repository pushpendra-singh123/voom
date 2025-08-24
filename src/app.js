import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8000;

app.set("port", PORT);

app.use(cors());
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ limit: "100kb", extended: true }));

app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//connect to the database
import dbConnect from "../config/database.js";
dbConnect();
