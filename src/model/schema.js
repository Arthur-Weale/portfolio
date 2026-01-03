import  mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({ //The project Model schema defines the shape of the database document.
    name: String, //This defines the name property as a string.
    description: String, 
    github: String, 
    live: String,
    image: String,
    stack: [String]
});

export default projectSchema; //Exporting the schema.