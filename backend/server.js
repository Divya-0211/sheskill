import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.js";


const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth",authRoutes);

app.get("/", (req, res)) => {
  res.send("SheSkill backend running");
}
+
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
