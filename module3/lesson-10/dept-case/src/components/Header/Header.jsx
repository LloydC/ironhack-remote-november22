import useIsMobile from '../../utils/useIsMobile'; 
import HeaderDesktop from './HeaderDesktop/HeaderDesktop';
import HeaderMobile from './HeaderMobile/HeaderMobile';

const Header = () => {
    const isMobile = useIsMobile();
    return isMobile ? <HeaderMobile/> : <HeaderDesktop />;
}

export default Header;