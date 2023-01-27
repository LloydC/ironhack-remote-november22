import { useState } from 'react'
import { ReactComponent as BlackDeptIcon } from '../../../assets/icons/DEPT-black-icon.svg'
import DesktopMenu from '../../NavigationMenu/DesktopMenu/DesktopMenu';
import './HeaderDesktop.scss';

const HeaderDesktop = () => {
    const [boxVisibility, setBoxVisibility] = useState(false);

    return boxVisibility ? <DesktopMenu boxVisibility={boxVisibility} setBoxVisibility={setBoxVisibility}/> :(
    <div className='header-container'>
        <div className='navigation-desktop'>
            <BlackDeptIcon/>
            <div className='menu'>
                <span className="name">Menu</span>
                <button className='hamburger-desktop' onClick={()=> setBoxVisibility(!boxVisibility)}>
                    <span className='dash'></span>
                    <span className='dash'></span>
                </button>
            </div>
        </div>
        <div className='underliner'></div>
        <div className='content'>
            <div className='header-title-container'>
                <h1 className="title">Work</h1>
            </div>
            <div className="cta-button-container">
                <button className='cta-button-desktop'>View case</button>
            </div>
        </div>
    </div>
  )
}

export default HeaderDesktop;
