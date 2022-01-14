import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import Context from "../../contexts/Context";

const SideNavMobileSubLinks = ({ subLinks }) => {

    const { showSideNavMobile, setShowSideNavMobile } = useContext(Context);

    return (
        <>
        {subLinks.map(subLink => {
            return <Link  onClick={(e) => setShowSideNavMobile(!showSideNavMobile)} className="btn tertiary" to={subLink.url} >{subLink.subTitle}</Link>
            })}
       </>
    )
}

export default SideNavMobileSubLinks;