import express from "express"
import notesRoutes from "./Routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv"

dotenv.config();

const app =express();
const PORT = process.env.PORT || 5001

connectDB();

app.use("/api/notes", notesRoutes)

app.listen(5001,() =>{
    console.log("Server started on PORT: 5001",PORT)
    
});

//mongodb+srv://pranav2005chandrasekhar:HZzclk2ctSbwUsf0@cluster0.6k0ndrb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0