import React, { useState } from 'react';
import { Link } from "react-router-dom";
/* import { CSSTransition } from "react-transition-group"; */

import HeaderSubNav from './HeaderSubNav';

const HeaderMainLinkIndividual = ({ link }) => {

    const [subLink, setSubLink] = useState(false);

    return (
        <div 
        onMouseLeave={(e) => setSubLink(false)}
        onTouchCancel={(e) => setSubLink(false)}
      >


     <Link 
        to={`${link.mainUrl}`}
        onClick={() => setSubLink(false)}
        onMouseEnter={() => setSubLink(true)}
        onTouchStart={() => setSubLink(true)}
        >{link.title}</Link>
        
          <HeaderSubNav subNav={ link.subNav }/>
     
      </div>
    )
}

export default HeaderMainLinkIndividual;