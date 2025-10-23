import express from "express";
import insertProject from "../controller/portfolio.js";

const router = express.Router();

router.post("/project", async (req, res)=> { //Route handler function handles the insertion of project throught a post request call.
    try {
        const formData = req.body
        const response = await insertProject(formData);
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
})

export default router;