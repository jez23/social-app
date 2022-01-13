import React, { useContext } from "react";

/* import Context from "../../../contexts/Context"; */

/* import users from "../../../users.json";

import About from "../profileComponents/subButtons/About";
import Message from "../profileComponents/subButtons/Message";
import Contacts from "../profileComponents/subButtons/Contacts"; */

import Grid108010 from "../../../grids/Grid108010";

const ProfileAboutMe = () => {

/*   const { baseUrl } = useContext(Context); */

  return (
    <div className="profileAboutMe">
     
      <div className="profileAboutMe__options">
        <Grid108010
          custClassMain={"bgLightRed"}
          custClassCol2={'pad20'}
          col2={
            <ul className="profileAboutMe__options__buttons">
              <li>
                <button
                  className="btn secondary">About</button>
              </li>
              <li>
                <button
                  className="btn secondary"
                >Message</button>
              </li>
              <li>
                <button
                  className="btn secondary">Add to contacts</button>
              </li> 
              <li>
                <button
                  className="btn secondary">Contacts</button>
              </li> 
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default ProfileAboutMe;