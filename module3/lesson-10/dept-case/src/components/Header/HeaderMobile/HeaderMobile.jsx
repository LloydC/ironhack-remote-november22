import { ReactComponent as BlackDeptIcon } from '../../../assets/icons/DEPT-black-icon.svg'
import { useState } from 'react';
import MobileMenu from '../../NavigationMenu/MobileMenu/MobileMenu';
import './HeaderMobile.scss';

const HeaderMobile = () => {
    const [boxVisibility, setBoxVisibility] = useState(false);

    return boxVisibility ? <MobileMenu boxVisibility={boxVisibility} setBoxVisibility={setBoxVisibility} /> : (
        <>
            <div className={'navigation'}>
                <BlackDeptIcon/>
                <div className='menu'>
                    <span className="name">MENU</span>
                    <button className='hamburger' onClick={()=> setBoxVisibility(!boxVisibility)}>
                        <span className='dash'></span>
                        <span className='dash'></span>
                    </button>
                </div>
            </div>
            <div className='hero'>
                <h1 className='header-title'>Work</h1>
            </div>
            <button className='cta-button-mobile'>
                View case
            </button>
        </>
        
    );
}

export default HeaderMobile;