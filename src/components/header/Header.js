import React from "react";
import './header.css';

import DesktopHeader from './DecktopHeader';
import MobileHeader from './MobileHeader';
import LoginTopNav from '../nav/LoginTopNav';

import navigation from '../../navigation.json';

const Header = () => {
 

  return (
    <> 
      <LoginTopNav />
      <header>
        <DesktopHeader links={navigation}/>
        <MobileHeader/> 
      </header> 
    </>
  );
};

export default Header;