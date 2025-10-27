import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req: Request, res: Response) => {
    res.send("Server is working!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
