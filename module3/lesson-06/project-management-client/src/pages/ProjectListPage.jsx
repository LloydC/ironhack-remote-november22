import { useState, useEffect } from "react";
import axios from "axios";
import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";
 
// const API_URL = "http://localhost:5005";
//  console.log(process.env.REACT_APP_API_URL)
 
function ProjectListPage() {
  const [projects, setProjects] = useState([]);
 
  const getAllProjects = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };
 
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, [] );
 
  
  return (
    <div className="ProjectListPage">

        <AddProject refreshProjects={getAllProjects} />
      
        {projects.map((project) => 
        // <ProjectCard key={project._id} title={project.title} description={project.description} _id={project._id}/>)
        <ProjectCard key ={project._id} {...project} />)
        }     
       
    </div>
  );
}
 
export default ProjectListPage;