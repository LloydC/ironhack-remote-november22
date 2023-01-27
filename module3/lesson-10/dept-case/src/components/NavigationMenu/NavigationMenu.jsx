import MobileMenu from './MobileMenu/MobileMenu';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import useIsMobile from '../../utils/useIsMobile'; 

const NavigationMenu = () => {
    const isMobile = useIsMobile();
    return isMobile ? (<MobileMenu />) : (<DesktopMenu />);
};

export default NavigationMenu;