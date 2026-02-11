


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import path from "path";

// Frontend static serve
app.use(express.static(path.join(process.cwd(), "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(process.cwd(), "../frontend/build/index.html")
  );
});


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- DATABASE ---------------- */

mongoose.connect("mongodb+srv://kids67550888_db_user:j7Y0VEcKoM6wQoWf@cluster0.sjnblfv.mongodb.net/DB_port")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* ---------------- MODELS ---------------- */

// Service Form Model
const serviceSchema = new mongoose.Schema({
  name: String,
  email: String,
  service: String,
  message: String,
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);

// Internship Model
const internshipSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  university: String,
  degree: String,
  year: String,
  field: String,
}, { timestamps: true });

const Internship = mongoose.model("Internship", internshipSchema);

/* ---------------- ROUTES ---------------- */

// Save Service Data
app.post("/service", async (req, res) => {
  try {
    const data = await Service.create(req.body);
    res.json({ success: true, data });
    console.log("yes service")
  } catch (err) {
    res.status(400).json({ success: false });
    console.log("error service")
  }
});

// Save Internship Data
app.post("/internship", async (req, res) => {
  try {
    const data = await Internship.create(req.body);
    res.json({ success: true, data });
    console.log("yes internship")
  } catch (err) {
    res.status(400).json({ success: false });
    console.log("error internship")
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
