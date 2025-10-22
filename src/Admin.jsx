import { useState } from "react";
import AddProjectButton from "./view/components/ui/AddProjectButton";
import AddProject from "./view/components/ui/AddProjectForm";
import ProjectCardAdmin from "./view/components/ui/ProjectCardAdmin";

function Admin() {
    const [isFormActive, setIsFormActive] = useState(false); //Use state is in parent since two sibling components will share the state.
    return <>
        <h1>Project Manager</h1> 
        <div className="panel-container">
        <div className="left-panel">
            <AddProjectButton toggleForm={()=> setIsFormActive(prev => !prev)} /> 
            <AddProject isActive={isFormActive}/>
            <ProjectCardAdmin/>
        </div>
        <div className="right-panel"></div>
        </div>
    </>;
}

export default Admin;
