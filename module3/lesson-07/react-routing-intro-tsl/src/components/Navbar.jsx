import  { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

import { LanguageContext } from '../context/Language';

function Navbar() {

  const { dictionary } = useContext(LanguageContext);
  console.log(dictionary)
    return (
      <nav className="Navbar">
        <ul>
          {/* <li> <Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/projects'}>Projects</Link></li> */}
        {/* <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
          Home
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "selected" : ""}
         >
          About
        </NavLink>
        
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          Projects
        </NavLink> */}
        {dictionary.navbar.map(content => 
        <NavLink key={content.path} to={content.path} className={({ isActive }) => isActive ? "selected" : ""}>
          {content.text}
        </NavLink>)}

        <LanguageSelector />
        </ul>
      </nav>
    );
  }
   
  export default Navbar;