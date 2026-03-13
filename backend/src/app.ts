import express from 'express';
import authRoutes from "./routes/authRoutes"
import noteRoutes from "./routes/noteRoutes"
import { authMiddleware } from './middleware/authMiddleware';
import cors from 'cors'


const app = express();

app.use(cors({
      
      origin: "http://localhost:5173",
      credentials: true
}));

app.use(express.json());

app.get("/health",(req,res)=>{
    
    res.send("working good fine");
})

app.use("/api/auth", authRoutes);
app.use("/api/note", noteRoutes);


export default app;