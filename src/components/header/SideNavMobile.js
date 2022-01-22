import React, { useContext } from "react";
import ReactDOM from "react-dom";

import Context from "../../contexts/Context";

import navigation from '../../navigation.json';
import SideNavMobileMainLinks from './SideNavMobileMainLinks';

const SideNavMobile = () => {
  const { showSideNavMobile, setShowSideNavMobile } = useContext(Context);

  return ReactDOM.createPortal(

  /*   showSideNavMobile && (
   <div className="sideNavMobile__outer" onClick={() => setShowSideNavMobile(!showSideNavMobile)}> */

    showSideNavMobile && 
  <div className={`${showSideNavMobile? 'sideNavMobile__outer' : ''}`} onClick={() => setShowSideNavMobile(!showSideNavMobile)}> 
            <div className={`${showSideNavMobile? 'sideNavMobile__inner' : ''}` } onClick={(e) => e.stopPropagation()}> 
    
    <div className="sideNavMobile__inner__close">
                <button className="btn secondary" onClick={() => setShowSideNavMobile(!showSideNavMobile)}>Close</button>
            </div>
                <div className="sideNavMobile__inner__menu">
                    {
                        navigation.map(link => {
                            return (
                                <SideNavMobileMainLinks link={link}/>
                            
                            )
                        })
                    }
                </div>
            </div>
           </div>
    ,
    document.getElementById("sideNavMobile")
  );
};

export default SideNavMobile;