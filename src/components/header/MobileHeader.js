import React, { useContext } from 'react';

import Context from '../../contexts/Context';


const MobileHeader = () => {

    const {showSideNavMobile,
        setShowSideNavMobile} = useContext(Context);
 

    return (
        <div className="header__mobileNav">
            <div>
            <i className="fa fa-bars" aria-hidden="true" onClick={() => setShowSideNavMobile(!showSideNavMobile)}></i>
            </div>
    </div>
    )
}

export default MobileHeader;