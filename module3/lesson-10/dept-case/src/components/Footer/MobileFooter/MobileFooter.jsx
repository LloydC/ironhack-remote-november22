import React from 'react';
import {ReactComponent as FacebookIcon } from '../../../assets/icons/socialMedia/mobile/facebook.svg';
import {ReactComponent as TwitterIcon } from '../../../assets/icons/socialMedia/mobile/twitter.svg';
import {ReactComponent as InstagramIcon } from '../../../assets/icons/socialMedia/mobile/instagram.svg';
import './MobileFooter.scss';

const MobileFooter = () => {
    const menu = ["Home","Services", "Stores","About", "Careers","Contact"];
    const icons = [<FacebookIcon/>, <TwitterIcon/>, <InstagramIcon/>];
  return (
    <div className='footer-container'>
        <div className="top-mobile">
            <div className="footer-menu-mobile">
                <ul>
                {menu.map((item,i) => <li key={i} className='list-item'>{item}</li>)}
                </ul>
            </div>
            <div className="socialMedia-mobile">
                <ul>
                    {icons.map((icon,i) => <li key={i} className='icon-item'>{icon}</li>)}
                </ul>
            </div>
        </div>
        <div className="bottom-mobile">
            <span>Chamber of Commerce: 63464101</span>
            <span>VAT: NL 8552.47.502.B01</span>
            <span>Terms and conditions</span>
            <span className='copyright'>© 2018 Dept Agency</span>
        </div>
    </div>
  )
}

export default MobileFooter