import React from "react";

const ProfileAboutMe = () => {
  return (
    <div className="profileAboutMe">
      <div className="profileAboutMe__options">
        <div className="bgLightRed pad20">
          <ul className="profileAboutMe__options__buttons">
            <li>
              <button className="btn secondary">About</button>
            </li>
            <li>
              <button className="btn secondary">Message</button>
            </li>
            <li>
              <button className="btn secondary">Add to contacts</button>
            </li>
            <li>
              <button className="btn secondary">Contacts</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileAboutMe;
