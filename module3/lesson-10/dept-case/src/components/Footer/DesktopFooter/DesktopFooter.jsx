import React from 'react';
import {ReactComponent as DeptWhiteIcon } from '../../../assets/icons/DEPT-footer-icon.svg';
import {ReactComponent as FacebookIcon } from '../../../assets/icons/socialMedia/mobile/facebook.svg';
import {ReactComponent as TwitterIcon } from '../../../assets/icons/socialMedia/mobile/twitter.svg';
import {ReactComponent as InstagramIcon } from '../../../assets/icons/socialMedia/mobile/instagram.svg';
import './DesktopFooter.scss';

const DesktopFooter = () => {
    const menu = ["Home","Services", "Stores","About", "Careers","Contact"];
    const icons = [<FacebookIcon/>, <TwitterIcon/>, <InstagramIcon/>];
  return (
    <div className='footer-desktop-container'>
        <div className="top-desktop">
            <div className="footer-menu-desktop">
            <DeptWhiteIcon style={{marginRight: '5rem'}} />
                <ul>
                {menu.map((item,i) => <li key={i} className='list-item-desktop'>{item}</li>)}
                </ul>
            </div>
            <div className="socialMedia-desktop">
                <ul>
                    {icons.map((icon,i) => <li key={i} className='icon-item-desktop'>{icon}</li>)}
                </ul>
            </div>
        </div>
        <div className="bottom-desktop">
            <div className='bottom-left'>
                <span>Chamber of Commerce: 63464101</span>
                <span>VAT: NL 8552.47.502.B01</span>
                <span>Terms and conditions</span>
            </div>
            <div className='bottom-right'>
                <span className='copyright'>© 2018 Dept Agency</span>
            </div>
            
        </div>
    </div>
  )
}

export default DesktopFooter