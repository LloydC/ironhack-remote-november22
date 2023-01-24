import  { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

import { LanguageContext } from '../context/Language';

function Navbar() {

  const { dictionary } = useContext(LanguageContext);
  console.log(dictionary)
    return (
      <nav className="Navbar">
        <ul style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
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