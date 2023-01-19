import Navbar from './components/Navbar';
import ApartmentsPage from './pages/ApartmentsPage';
import AddApartmentPage from "./pages/AddApartmentPage";
import ApartmentDetails from './pages/ApartmentDetails';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ApartmentsPage />} /> 
        <Route path="/apartments/new" element={<AddApartmentPage />} />
        <Route path='/apartments/:apartmentId' element={<ApartmentDetails />} />
      </Routes>
    </div>
  );
}

export default App;
