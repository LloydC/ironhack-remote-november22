import React from 'react';
// import { ReactComponent as NiveaLogo } from '../../assets/icons/companies/nivea-logo.svg';
// import { ReactComponent as MonaLogo } from '../../assets/icons/companies/mona-logo.svg';
// import { ReactComponent as TransaviaLogo } from '../../assets/icons/companies/transavia-logo.svg';
// import { ReactComponent as ZalandoLogo } from '../../assets/icons/companies/zalando-logo.svg';
// import { ReactComponent as TomTomLogo } from '../../assets/icons/companies/tomtom-logo.svg';
// import { ReactComponent as UnileverLogo } from '../../assets/icons/companies/unilever-logo.svg';
import'./SectionClients.scss';

const SectionClients = () => {
   // const logos = [<NiveaLogo/>, <MonaLogo/>, <TransaviaLogo/>, <ZalandoLogo />, <TomTomLogo/>, <UnileverLogo/>];
  
    return (
    <div className='clients-container'>
        <h1 className='clients-title'>Clients</h1>
        <p className='clients-statement'>We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
        <div className='logos-container'>
            {/* <ul>   
            {logos.map((logo, i) => <li key={i}>{logo}</li>)}
            </ul> */}
        </div>
    </div>
  )
}

export default SectionClients