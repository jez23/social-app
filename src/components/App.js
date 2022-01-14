import React from "react";
import { Routes, Route } from "react-router-dom";
import { ConstProvider } from "../contexts/Context"; 

import "../css/imports.css";


import Header from "../components/header/Header";
import SideNavMobile from '../components/header/SideNavMobile';
import AllReviews from "../components/pages/allReviews/AllReviews";
import Forums from "../components/pages/forums/catergory/Forums1";
import ForumTopics from "./pages/forums/topics/ForumTopics";
import ForumTopic from "./pages/forums/topic/ForumTopic";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import Profile from "../components/pages/profile/Profile";
/* import ProfileSettings from "../components/pages/userInfo/profileSettings/ProfileSettings"; */
import MembersDirectory from "../components/pages/membersDirectory/MembersDirectory";
import SearchPopUp from './search/SearchPopUp';
import CookiePolicy from "../components/pages/legal/CookiePolicy";
import PrivacyPolicy from "../components/pages/legal/PrivacyPolicy";
import TermsAndConditions from "../components/pages/legal/TermsAndConditions";
import UnauthorisedPermissions from "../components/pages/unauthorised/UnauthorisedPermissions";
import CookieNotification from "../components/pages/legal/CookieNotification";
import Footer from "../components/footer/Footer";
import Error404 from "../components/pages/errors/Error404";

const App = () => {
  return (
    <>
      <ConstProvider>
        <Header />
        <SideNavMobile />
        <div className="container">
    
          <Routes>
            
             <Route path="/"  element={<AllReviews />} /> 

            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} />

            <Route path="/members-directory/profile/:username" element={<Profile />} />
            <Route path="/forums" element={<Forums />} />
            <Route exact path="/forums/category/:category_slug" element={<ForumTopics />}/>
            <Route path="/forums/category/:category_slug/:topic_slug" element={<ForumTopic />}/>
          {/*   <Route path="/settings" element={<ProfileSettings />} /> */}
 
            <Route path="/members-directory" element={<MembersDirectory />} />

            <Route path="/cookie-policy" element={<CookiePolicy />} />   
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            <Route
              path="/unauthorised-permissions"
              element={<UnauthorisedPermissions />}
            />
            <Route path='*' element={< Error404 />}/>
           {/*  <Route Path="*" element={<Error404 />} />  */}
          
          </Routes>

        </div>

        <CookieNotification />
        <SearchPopUp />
        <Footer />
        </ConstProvider>
    </>
  );
};

export default App;
