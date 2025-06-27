import mongoose from "mongoose";

// Create a Schema

//Create a model based off the schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
         content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }

);

const Note = mongoose.model("Note", noteSchema);

export default Note;