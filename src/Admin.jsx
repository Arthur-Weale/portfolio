import AddProjectButton from "./view/components/ui/AddProjectButton";
import AddProject from "./view/components/ui/AddProjectForm";
import ProjectCardAdmin from "./view/components/ui/ProjectCardAdmin";

function Admin() {
    return (
    <>
        <h1>Project Manager</h1>
        <div className="panel-container">
        <div className="left-panel">
            <AddProjectButton />
            <AddProject/>
            <ProjectCardAdmin/>
        </div>
        <div className="right-panel"></div>
        </div>
    </>
    );
}

export default Admin;
