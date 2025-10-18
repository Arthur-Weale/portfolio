function AddProject(){
    return (
      <form className="project-form" action="">
        <label htmlFor="name">Project Name</label>
        <input type="text" id="name" />

        <label htmlFor="description">Description</label>
        <input type="text" id="description" />

        <label htmlFor="live">Live Url</label>
        <input type="text" id="live" />

        <label htmlFor="github">Github Url</label>
        <input type="text" id="github" />

        <label htmlFor="image">Image</label>
        <input type="file" accept="image/*" id="image" />
        <button className="add-project-btn">Add Project</button>
      </form>
    );
}

export default AddProject;