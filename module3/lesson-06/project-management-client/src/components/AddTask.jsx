import { useState } from "react";
import axios from "axios";
 
function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { refreshProject, projectId } = props
 
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title, description, projectId}

    axios.post(`${process.env.REACT_APP_API_URL}/api/tasks`, newTask)
        .then(() => {
            setTitle("");
            setDescription("");
            refreshProject();
        })
  };
 
  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
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
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
 
export default AddTask;