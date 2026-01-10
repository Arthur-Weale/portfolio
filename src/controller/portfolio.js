import mongoose from "mongoose";
import initDb from "../model/database.js"
import projectSchema from "../model/schema.js";

await initDb();

// Delete the model if it already exists (only in dev!)//Remove in production
//delete mongoose.connection.models['Project']; //Deletes the model from cache.
const ProjectModel = mongoose.model("Project", projectSchema);

export const getProjects = async (userId) => {
    try {
        const result = await ProjectModel.find({userId})
        return result;
    } catch (error) {
        console.log(error)
    }
    
}

export const insertProject = async(formData)=>{
    try {
        await initDb(); //Initialises the database connection
        console.log("Inserting project:", formData);
        const projectModel = await ProjectModel.create({ //Creates a project and validates using the schema.
            name: formData.name,
            description: formData.description,
            live: formData.live,
            github: formData.github,
            image:formData.image,
            stack: formData.stack
        });
        console.log("Inserted project:", projectModel);
        console.log("Connected DB:", mongoose.connection.name); //Logs the connection name
        console.log("Cluster Host:", mongoose.connection.host);
        console.log("live url:", formData.image)
        return projectModel;
    } catch (error) {
        console.log(error)
    }
}

export const updateProject = async(projectId)=>{
    try {
        const updatedProject = await ProjectModel.findOneAndUpdate({id: projectId})
        if(!updatedProject) {
            throw new Error("Could not update project");
        }
    } catch (error) {
        console.log(error)
    }
}

export const deleteProject = async (projectId) => {
    try {
        const deletedProject = await ProjectModel.findOneAndDelete({id: projectId})
        if(!deletedProject){
            throw new Error("The project could not be deleted or project does noe exist")
        } 
    } catch (error) {
        console.log(error)
    }
}

//export default insertProject;