import mongoose from "mongoose";
import initDb from "../model/database.js"
import projectSchema from "../model/schema.js";

await initDb();

const ProjectModel = mongoose.model("Project", projectSchema);

const insertProject = async()=>{
    try {
        await initDb(); //Initialises the database connection
        const projectModel = await ProjectModel.create({ //Creates a project and validates using the schema.
            name: "Hello World",
            imageUrl: "someplace/hello/otherplace",
            imageAlt: "someplace/hello/otherplace",
            description: "This is a hello project, its awesome, check it out.",
            github: "someplace/hello/otherplace",
            live: "someplace/hello/otherplace",
        });
        console.log("Connected DB:", mongoose.connection.name); //Logs the connection name
        console.log("Cluster Host:", mongoose.connection.host);
        return projectModel;
    } catch (error) {
        console.log(error)
    }
}

export default insertProject;