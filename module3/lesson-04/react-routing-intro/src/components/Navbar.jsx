import { NavLink} from 'react-router-dom';

function Navbar() {
    return (
      <nav className="Navbar">
        <ul>
          {/* <li> <Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/projects'}>Projects</Link></li> */}
        <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
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
        </NavLink>
        </ul>
      </nav>
    );
  }
   
  export default Navbar;