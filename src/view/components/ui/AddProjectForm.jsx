import { useState } from "react";

function AddProject({isActive}){
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    live: "",
    github: "",
    image : null,
    stack: ""
  });

  const handleChange = (e)=>{
    const {name , value, files} = e.target

    if(name == "image"){
      setFormData((prevData) => ({
        ...prevData,
        image: files[0],
      }));
    }else{
      setFormData((prevData)=>({
        ...prevData,
        [name]: value,
    }))
    }
  }  


  const handleSubmit = async(event) => {
    event.preventDefault();

    console.log(formData.image)

    const imageFormData = new FormData();
    imageFormData.append("file", formData.image)
    imageFormData.append("upload_preset", "portfolio")

    try {

    const cloudResponse = await fetch(
      "https://api.cloudinary.com/v1_1/dqsfphdsl/image/upload",
      {
        method: "POST",
        body: imageFormData,
      }
    );

    const cloudResult = await cloudResponse.json();
    console.log(cloudResult.resource_type);

    const projectData = {
      name: formData.name,
      description: formData.description,
      live: formData.live,
      github: formData.github,
      image: cloudResult.secure_url,
      stack: formData.stack.split(",").map(item => item.trim())
    };

    console.log(projectData.image)

    const response = await fetch("http://localhost:3000/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    const result = await response.json();
    console.log(result);
    } catch (error) {
      console.log("failed to submit form", error)
    }
}

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`project-form ${isActive ? "active" : ""}`}
      >
        <h3>Add New Project</h3>
        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="live">Live Url</label>
        <input
          type="text"
          id="live"
          name="live"
          value={formData.live}
          onChange={handleChange}
        />

        <label htmlFor="github">Github Url</label>
        <input
          type="text"
          id="github"
          name="github"
          value={formData.github}
          onChange={handleChange}
        />

        <label htmlFor="image">Image</label>
        <input
          type="file"
          accept="image/*"
          id="image"
          name="image"
          onChange={handleChange}
        />

        <label htmlFor="live">Tech Stack</label>
        <input
          type="text"
          id="stack"
          name="stack"
          value={formData.stack}
          onChange={handleChange}
        />
        <button
          className="add-project-btn"
          type="submit"
          onClick={() => console.log("i have been clicked")}
        >
          Add Project
        </button>
      </form>
    </div>
  );
}
export default AddProject;