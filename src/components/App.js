import React from "react";
import { Routes, Route } from "react-router-dom";
import { ConstProvider } from "../contexts/Context"; 

import "../css/imports.css";

import Header from "../components/header/Header";
import Home from "../components/pages/Home";
import Forums from "../components/pages/forums/catergory/Forums1";
import ForumTopics from "./pages/forums/topic/ForumTopics";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import Profile from "../components/pages/userInfo/Profile";
import ProfileSettings from "../components/pages/userInfo/profileSettings/ProfileSettings";
import MembersDirectory from "../components/pages/membersDirectory/MembersDirectory";
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

        <div className="container">

          <Routes>
             <Route path="/"  element={<Forums />} /> 

            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} />

            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/forums/category/:category_slug" element={<ForumTopics />}/>
            <Route path="/settings" element={<ProfileSettings />} />

            <Route path="/members-directory" element={<MembersDirectory />} />

            <Route path="/cookie-policy" element={<CookiePolicy />} />   
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            <Route
              path="/unauthorised-permissions"
              element={<UnauthorisedPermissions />}
            />
            <Route element={<Error404 />} /> 
          </Routes>

        </div>

        <CookieNotification />

        <Footer />
        </ConstProvider>
    </>
  );
};

export default App;
