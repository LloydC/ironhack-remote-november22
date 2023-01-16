import NavigationBar from './components/NavigationBar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // load my css stylesheet

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
