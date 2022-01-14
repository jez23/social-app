import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";

import Context from "../../contexts/Context";

import SideNavMobileSubLinks from './SideNavMobileSubLinks';

const SideNavMobileMainLinks = ({ link }) => {
    
    const [showDropDown, setShowDropDown ] = useState(false);
    const { showSideNavMobile, setShowSideNavMobile } = useContext(Context);

    return (
        <div className="sideNavMobile__inner__menu__sections" onClick={() => setShowDropDown(!showDropDown)}>
        <Link className="btn secondary" to={link.mainUrl} onClick={() => setShowSideNavMobile(!showSideNavMobile)}>{link.title}</Link>
        {link.subNav.subLinks.length > 0 ? <p className="sideNavMobile__inner__menu__sections__subBut">SUB MENU <i className="fa fa-caret-down" aria-hidden="true"></i></p>: null}
            { showDropDown && <SideNavMobileSubLinks subLinks={link.subNav.subLinks}/> }
        </div>
    )
}

export default SideNavMobileMainLinks;