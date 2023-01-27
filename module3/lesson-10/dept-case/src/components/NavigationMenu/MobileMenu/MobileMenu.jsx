import { ReactComponent as WhiteDeptIcon } from '../../../assets/icons/DEPT-white-icon.svg'
import { ReactComponent as ClosingIcon } from '../../../assets/icons/closing-white-icon.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/polygon-menu-icon.svg';
import './MobileMenu.scss';

const MobileMenu = ({ boxVisibility, setBoxVisibility }) => {
    const menuItems = ["Home","Work", "Culture", "Services","Partners", "Stories", "Careers", "Events", "Contact"];
    return (
        <div style ={{ width: '100vw', height:'100vh',display: 'flex', flexDirection: 'column', background: 'black', color: 'white'}}>
            <div className='mobile-container'>
                <WhiteDeptIcon /><ClosingIcon onClick={()=> setBoxVisibility(!boxVisibility)}/>
            </div>
            <ul className='list'>
                {menuItems.map((item, i) =>{
                    if(i === 0){
                        return(<li key={i} className='list-item-footer first-item-mobile'><ArrowIcon style={{ marginRight: '10.5px'}} /><span>{item}</span></li>)
                    }
                    return  <li key={i} className='list-item-footer'>{item}</li>;
                })}
            </ul>
        </div>);
}

export default MobileMenu;