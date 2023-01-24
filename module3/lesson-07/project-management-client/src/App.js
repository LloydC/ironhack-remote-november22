import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import EditProjectPage from './pages/EditProjectPage';
import SignupPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/projects' element={<ProjectListPage />} />
        <Route path='/projects/:projectId' element={<ProjectDetailsPage />}/>
        <Route path='/projects/edit/:projectId' element={<EditProjectPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
