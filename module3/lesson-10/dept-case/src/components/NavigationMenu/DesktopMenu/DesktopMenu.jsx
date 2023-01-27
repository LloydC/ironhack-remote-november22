import { ReactComponent as WhiteDeptIcon } from '../../../assets/icons/DEPT-white-icon.svg'
import { ReactComponent as ClosingIcon } from '../../../assets/icons/closing-white-icon.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/polygon-landen-icon.svg';
import './DesktopMenu.scss';

const DesktopMenu = ({ boxVisibility, setBoxVisibility }) => {
    const menuItems = ["Home","Work", "Culture", "Services","Partners", "Stories", "Careers", "Events", "Contact"];
    const locales = ["Global", "Nederland", "United States", "Ireland", "United Kingdom", "Deutschland"];
    return (
        <div className='desktop-menu'>
            <div className='desktop-container'>
                <div style={{ width: '20.7rem', height: '16.8rem', display: 'flex', flexDirection: 'column', zIndex: '3'}}>
                    <div style={{}}>
                        <WhiteDeptIcon />
                        <div className='landen'>
                            <h2>Landen</h2>
                            <br/>
                            <ul className='locale-container'>
                                {locales.map((locale, i) => {
                                    if(i === 1){
                                        return <li key={i} className='locale-item'><ArrowIcon/> <span>{locale}</span></li>
                                    }
                                    return <li key={i} className='locale-item'>{locale}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <button>
                    <ClosingIcon onClick={()=> setBoxVisibility(!boxVisibility)}/>
                </button>
            </div>
            <ul className='list-menu-desktop'>
                {menuItems.map((item, i) =>{
                    if(i === 0){
                        return(<li key={i} className='list-item-menu-desktop first-item-mobile'><ArrowIcon style={{ marginRight: '10.5px'}} /><span>{item}</span></li>)
                    }
                    return  <li key={i} className='list-item-menu-desktop'>{item}</li>;
                    })
                }
            </ul>
        </div>);
}

export default DesktopMenu;