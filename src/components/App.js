import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ConstProvider } from "../contexts/Context"; 

import "../css/imports.css";
 
import spinner from '../img/loader/Spinner-1s-200px.svg';

const Header = React.lazy(() => import('../components/header/Header'));
const SideNavMobile = React.lazy(() => import('../components/header/SideNavMobile'));
const AllReviews = React.lazy(() => import('../components/pages/allReviews/AllReviews'));
const Forums = React.lazy(() => import('../components/pages/forums/mainForumPage/Forums1'));
const ForumTopics = React.lazy(() => import('./pages/forums/topicsListPage/ForumTopics'));
const ForumTopic = React.lazy(() => import('./pages/forums//mainTopicPage/ForumTopic'));
const Login = React.lazy(() => import('../components/pages/login/Login'));
const Register = React.lazy(() => import('../components/pages/register/Register'));
const Profile = React.lazy(() => import('../components/pages/profile/Profile'));
const MembersDirectory = React.lazy(() => import('../components/pages/membersDirectory/MembersDirectory'));
const SearchPopUp = React.lazy(() => import('./search/SearchPopUp'));
const CookiePolicy = React.lazy(() => import('../components/pages/legal/CookiePolicy'));
const PrivacyPolicy = React.lazy(() => import('../components/pages/legal/PrivacyPolicy'));
const TermsAndConditions = React.lazy(() => import('../components/pages/legal/TermsAndConditions'));
const UnauthorisedPermissions = React.lazy(() => import('../components/pages/unauthorised/UnauthorisedPermissions'));
const CookieNotification = React.lazy(() => import('../components/pages/legal/CookieNotification'));
const Footer = React.lazy(() => import('../components/footer/Footer'));
const Error404 = React.lazy(() => import('../components/pages/errors/Error404'));


const App = () => {
  return (
    <>
      <ConstProvider>
      <Suspense fallback={<div className="loaderSpinner"><img alt="Loading Spinner" src={spinner}/></div>}>
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
        </Suspense>
        </ConstProvider>
    </>
  );
};

export default App;
