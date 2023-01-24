import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
 
function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { projectId } = useParams();            // <== ADD
  
  const navigate = useNavigate()
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem('authToken');
    //update the project
    const updatedProject = {title, description}
    axios.put(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`, updatedProject, { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(() => navigate(`/projects/${projectId}`))
        .catch(err => console.log(err))
    // redirect the user to the project's page
  }
  // This effect will run after the initial render and each time
  // the projectId coming from the URL parameter `projectId` changes
   

  const deleteProject = () => {                    //  <== ADD
    // Make a DELETE request to delete the project
    const storedToken = localStorage.getItem('authToken');
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate("/projects");
      })
      .catch((err) => console.log(err));
  };  

   useEffect(() => {  
    const storedToken = localStorage.getItem('authToken');                                // <== ADD
     axios
       .get(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
       .then((response) => {
         /* 
           We update the state with the project data coming from the response.
           This way we set inputs to show the actual title and description of the project
         */
         const oneProject = response.data;
         setTitle(oneProject.title);
         setDescription(oneProject.description);
       })
       .catch((error) => console.log(error));
     
   }, [projectId]);
  
  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>
 
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <input type="submit" value="Submit" />
      </form>

      <button onClick={deleteProject}>Delete Project</button>
    </div>
  );
}
 
export default EditProjectPage;