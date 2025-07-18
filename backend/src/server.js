import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app =express();
const PORT = process.env.PORT || 5001;



app.use(
    cors({
      origin:"http://localhost:5173",
    })
  )
app.use(express.json());
app.use(rateLimiter)


//app.use((req,res,next)=>{
  //  console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    //next();
//});

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(PORT,() =>{
        console.log("Server started on PORT:",PORT);
        
    });
})

//mongodb+srv://pranav2005chandrasekhar:HZzclk2ctSbwUsf0@cluster0.6k0ndrb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0