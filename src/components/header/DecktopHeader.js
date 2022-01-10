import React from 'react';
/* import HeaderMainLinks from './HeaderMainLinks'; */
import HeaderMainLinkIndividual from './HeaderMainLinkIndividual';

const DesktopHeader = ({ links }) => {
    return ( 
        <div className="header__desktop">
        {links.map((link, i) => {
            return <HeaderMainLinkIndividual key={i} link={link}/> 
          })}
        </div>
    )
}

export default DesktopHeader;