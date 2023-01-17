import { v4 as uuidv4 } from 'uuid';
import StudentCard from './StudentCard';

function StudentList() {
    const students = ['Marc', 'Lucy', 'Anna'];
   
    return (
      <div className="list">
        <h2>Student List</h2>
        
        { students.map(name => {
          return <StudentCard key={uuidv4()} name={name} /> 
        })}
        
      </div>
    );
  }
   
  export default StudentList;