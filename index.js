import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import connectDB from "./backend/dbconnect/db.js";
import userRoute from "./backend/route/user.route.js";
import bookRoute from "./backend/route/book.route.js";
import { verifyToken } from "./backend/middleware/auth.middleware.js";


const PORT = process.env.port || 3005;

const app = express();

app.use(cors({
    origin:"*",
}));
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use("/user",userRoute)
app.use("/book",verifyToken,bookRoute)


app.listen(PORT,async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
    
});