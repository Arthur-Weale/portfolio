import { useState } from "react";

function AddProject({isActive}){
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    live: "",
    github: "",

  });

  const handleChange = (e)=>{
    const {name , value} = e.target

    setFormData((prevData)=>({
      ...prevData,
      [name]: value,
  }))
  }

  const handleSubmit = async(event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/project",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    const result = await response.json();
    console.log(result);
  }

  return (
    <form
      className={`project-form ${isActive ? "active" : ""}`}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Project Name</label>
      <input type="text" id="name" name="name" value={formData.name}  onChange={handleChange}/>

      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="description"  value={formData.description} onChange={handleChange}/>

      <label htmlFor="live">Live Url</label>
      <input type="textarea" id="live" name="live" value={formData.live} onChange={handleChange}/>

      <label htmlFor="github">Github Url</label>
      <input type="text" id="github" name="github" value={formData.github} onChange={handleChange}/>

      <label htmlFor="image">Image</label>
      <input type="file" accept="image/*" id="image" name="image" />
      <button
        className="add-project-btn"
        type="submit"
        onClick={() => console.log("i have been clicked")}
      >
        Add Project
      </button>
    </form>
  );
}

export default AddProject;