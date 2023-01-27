import  useWindowSize from './useWindowSize';

function useIsMobile(){
    const size = useWindowSize();
    if(size.width === undefined){
        return null;
    }
    if (size.width > 768){
        return false
    }
    return true;
}

export default useIsMobile;