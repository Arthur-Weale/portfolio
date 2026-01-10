import express from "express";
import { insertProject, getProjects, deleteProject, updateProject } from "../controller/portfolio.js";

const router = express.Router();

router.get("/projects", async (req, res)=>{
    try {
        const response = await getProjects(req.userId);
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
})

router.post("/project", async (req, res)=> { //Route handler function handles the insertion of project throught a post request call.
    try {
        const formData = req.body
        const response = await insertProject(formData);
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
})

    router.put("edit/:id", async (req, res) => {
    try {
        const idToEdit = req.params.id;
        const response = await updateProject(idToEdit);
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
})

router.delete("delete/:id", async (req, res) => {
    try {
        const idToDelete = req.params.id;
        const response = await deleteProject(idToDelete);
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }

})

export default router;