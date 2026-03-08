import express from 'express';
import authRoutes from "./routes/authRoutes"
import noteRoutes from "./routes/noteRoutes"
import { authMiddleware } from './middleware/authMiddleware';

const app = express();

app.use(express.json());

app.get("/health",(req,res)=>{
    
    res.send("working good fine");
})

app.use("/api/auth", authRoutes);
app.use("/api/note",authMiddleware, noteRoutes);


export default app;