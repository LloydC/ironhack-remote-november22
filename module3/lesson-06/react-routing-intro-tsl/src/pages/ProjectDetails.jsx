import {useState, useEffect} from 'react';
import projectsData from '../projects-data.json';
import { useParams, Link } from 'react-router-dom'
 
function ProjectDetailsPage(props) {
    const [foundProject, setFoundProject] = useState(null);
console.log('useParams',useParams())
  const { projectId } = useParams();
  console.log('projectId -->', projectId);

  // Method .find() returns the first found matching element,
  // or `null` if no matching element is found.


  useEffect(() => {                                      // <== ADD
    const project = projectsData.find((projectObj) => {
      return projectObj._id === projectId;
    })
 
    if (project) {
      setFoundProject(project);
    }
    
  }, [projectId]);
  
  return (
    <div>
      <h1>Project Details</h1>

      {!foundProject && <h3>Project not found!</h3>}  {/* <== ADD  */}
 
      {/*  ADD  */}
      {foundProject && (
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
          <Link to="/projects">Back</Link>
        </>
      )}
    </div>
  )
}
 
export default ProjectDetailsPage;