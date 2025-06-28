import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app =express();
const PORT = process.env.PORT || 5001;


connectDB();

app.use(express.json());  

app.use("/api/notes", notesRoutes);

app.listen(PORT,() =>{
    console.log("Server started on PORT:",PORT);
    
});

//mongodb+srv://pranav2005chandrasekhar:HZzclk2ctSbwUsf0@cluster0.6k0ndrb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0