import express from "express";
//import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
//import initDb from "./model/database.js";

const app = express();

app.use(express.json());
//await initDb();

app.get("/", (req, res )=>{ //Route handler for the base url.
    res.send("Hello Arthur, you just built the router api")
})

app.use("/", projectRoutes)

app.listen(3000, ()=> console.log("Server is running on port 3000"));