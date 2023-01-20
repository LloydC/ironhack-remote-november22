import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import HomePageWithNavigate from './pages/HomePageWithNavigate';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetails';
import ErrorPage from './pages/ErrorPage';
import QueryStringExample from "./pages/QueryStringExample"; 
import projectsData from './projects-data.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePageWithNavigate />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage projects={projectsData} />} />
        <Route path='/projects/:projectId' element={<ProjectDetailsPage />} />
        <Route path="/example" element={ <QueryStringExample /> } />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
