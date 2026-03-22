import express from "express";
import authRoutes from "./routes/authRoutes";
import noteRoutes from "./routes/noteRoutes";
import { authMiddleware } from "./middleware/authMiddleware";
import cors from "cors";

const app = express();


// prod + dev

const allowedOrigins = [
  "http://localhost:5173",
  // process.env.FRONTEND_URL,
   "http://second-brain23.s3-website.ap-south-1.amazonaws.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Postman etc.

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


// pehle

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   }),
// );

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("working good fine");
});

app.use("/api/auth", authRoutes);
app.use("/api/note", noteRoutes);

export default app;
