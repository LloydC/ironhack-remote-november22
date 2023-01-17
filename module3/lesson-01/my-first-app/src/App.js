import NavBar from './components/Navbar';
import './App.css';

const links = ["Home", "About", "Contact"]

function App() {
  return (
    <div className="App">
      <NavBar links={links}/>
    </div>
  );
}

export default App;
