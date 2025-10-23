import mongoose from "mongoose";
import initDb from "../model/database.js"
import projectSchema from "../model/schema.js";

await initDb();

const ProjectModel = mongoose.model("Project", projectSchema);

const insertProject = async(formData)=>{
    try {
        await initDb(); //Initialises the database connection
        const projectModel = await ProjectModel.create({ //Creates a project and validates using the schema.
            name: formData.name,
            description: formData.description,
            live: formData.live,
            github: formData.github,
            //image_Url: addProject.image_Url,
        });
        console.log("Connected DB:", mongoose.connection.name); //Logs the connection name
        console.log("Cluster Host:", mongoose.connection.host);
        console.log("live url:", formData.live)
        return projectModel;
    } catch (error) {
        console.log(error)
    }
}

export default insertProject;