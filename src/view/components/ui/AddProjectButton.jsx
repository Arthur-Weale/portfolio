import { IoIosAddCircleOutline } from "react-icons/io";
import AddProject from "./AddProjectForm";

function AddProjectButton({toggleForm}) {
    return (
        <button 
        className="add-project-btn"
        onClick={toggleForm}
        >
            <IoIosAddCircleOutline size={18} />
            Add Project
        </button>
    );
}

export default AddProjectButton;
