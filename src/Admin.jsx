import { useState } from "react";
import AddProjectButton from "./view/components/ui/AddProjectButton";
import AddProject from "./view/components/ui/AddProjectForm";
import ProjectCardAdmin from "./view/components/ui/ProjectCardAdmin";

function Admin() {
    const [isFormActive, setIsFormActive] = useState(false); //Use state is in parent since two sibling components will share the state.
    return (
    <>
    <div className={`panel-container ${isFormActive ? "active" : ""}`}>
        <h1>Project Manager</h1>
        <AddProjectButton
        toggleForm={() => setIsFormActive((prev) => !prev)}
        />
        <div className="left-panel">
        <ProjectCardAdmin />
        </div>
    </div>
    {isFormActive && (
        <div className="overlay"
        onClick={()=>{setIsFormActive(false)}}>
        <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // prevent modal click from closing
        >
            <AddProject />
        </div>
        </div>
    )}
    </>
);
}

export default Admin;
