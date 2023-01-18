import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";
 
const initialTasks = [
    {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false
  },
];
 
function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const toggleTaskDone = (id) => {
    const tasksCopy = [...tasks];
      
    tasksCopy.forEach((task) => {
      // Find the selected task and update task's `isDone` property,
      if (task._id === id) {
        task.isDone = task.isDone ? false : true;
   
        // then update `tasksCompleted` state variable
        if (task.isDone) setTasksCompleted(tasksCompleted + 1);
        else if (!task.isDone) setTasksCompleted(tasksCompleted - 1);        
      }
   
      setTasks(tasksCopy);
    }); 
  }
 
  return (
    <div>
      <Summary tasksCompleted={tasksCompleted}/>
      
      <div className="todo-container">
        {tasks.map((task) => <Task key={task._id} task={task} toggleTaskDone={toggleTaskDone} /> )}
      </div>
    </div>
  );
}
 
export default ToDoList;