import React from 'react';
import DesktopFooter from './DesktopFooter/DesktopFooter';
import MobileFooter from './MobileFooter/MobileFooter';
import useIsMobile from '../../utils/useIsMobile';

const Footer = () => {
    const isMobile = useIsMobile();
  return isMobile ? <MobileFooter /> : <DesktopFooter />;
}

export default Footer