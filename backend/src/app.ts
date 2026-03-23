import express from "express";
import authRoutes from "./routes/authRoutes";
import noteRoutes from "./routes/noteRoutes";
import { authMiddleware } from "./middleware/authMiddleware";
import cors from "cors";

const app = express();


// prod + dev

const allowedOrigins = [
  "http://localhost:5173",
  "http://second-brain23.s3-website.ap-south-1.amazonaws.com",
];


console.log("use ke andar")
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Incoming Origin:", origin);

        console.log("origin aaya ", origin);
     
        if (!origin) return callback(null, true);
         
        
      const isAllowed = allowedOrigins.some((allowed) =>
        origin === allowed || origin.startsWith(allowed)
      );
           
      if (isAllowed) {

         console.log("agr allowed ho gya to");
        return callback(null, true);
      }
         
         console.log("agr allowed ho gya to");

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: false,
  })
);

// 🔥 IMPORTANT
// app.options("*", cors());


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
