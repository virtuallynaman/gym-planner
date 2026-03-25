import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import 'dotenv/config';
import { profileRouter } from '../routes/profile';
import { planRouter } from '../routes/plan';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// API routes
app.use("/api/profile", profileRouter);
app.use("/api/plan", planRouter);

app.listen(PORT, ()=>{
    console.log("Server running on port", PORT);
});