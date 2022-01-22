import React from 'react';
import ReactDOM from 'react-dom';


const EditProfileImage = () => {    
   

    return ReactDOM.createPortal(
        <div className="EditProfileImage__container">
            <div className="EditProfileImage" onClick={(e) => e.stopPropagation()}>
            <h2>Change Profile Image</h2>
                <input className="btn secondary" type="file"/>
              
                <div className="EditProfileImage__buttons">
                    <button className="btn primary">Save</button>
                    <button className="btn primary">Cancel</button>
                </div>
            </div>
        </div>
        , document.getElementById('editProfileImage') 
    )
}

export default EditProfileImage;