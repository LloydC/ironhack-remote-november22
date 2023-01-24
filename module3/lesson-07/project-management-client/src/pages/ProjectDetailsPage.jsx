import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";
import ProjectCard from "../components/ProjectCard";
 
 
function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);
  
  const {projectId} = useParams()

  const getProject = () => {          //  <== ADD A NEW FUNCTION
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };
 
  useEffect(()=>{
        // axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`)
        //     .then(response => setProject(response.data))
        //     .catch(err => console.log(err))
        getProject()
        // eslint-disable-next-line
  }, [projectId])
  
  return (
    <div className="ProjectDetails">
      {project && (
        <>
          {/* <h1>{project.title}</h1>
          <p>{project.description}</p> */}
          <ProjectCard {...project} />
        </>
      )}
 
        <AddTask refreshProject={getProject} projectId={projectId} />  

      {project &&
      <ul>
            {project.tasks.map((task) => (
            <TaskCard key={task._id} {...task}/>
        ))}
      </ul>
        }
 
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>

      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>      
    </div>
  );
}
 
export default ProjectDetailsPage;