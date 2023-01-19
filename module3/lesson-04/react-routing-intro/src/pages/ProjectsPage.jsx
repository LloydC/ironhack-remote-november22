import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
// import projectsData from "./../projects-data.json";
 
function ProjectsPage(props) {
  const [projects, setProjects] = useState([]); // step 1 --> initializing state variable
 
  // This effect will run only once on the initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => { // step 3 --> update the state variable
    // setTimeout(() => setProjects(props.projects), 1000);
    setProjects(props.projects)
  }, [props.projects]);
 
  return ( // step 2 --> render the return statement
    <div>
      <h2>Projects</h2>
      {/* Conditional rendering for data fetching use case */}
      {/* {projects.length === 0 ?<p>Loading projects...</p> 
        : projects.map((project) => {
        return (
          <div key={project.id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
          </div>
        );
      })} */}
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3><Link to={`/projects/${project._id}`}>{project.name}</Link></h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}
 
export default ProjectsPage;