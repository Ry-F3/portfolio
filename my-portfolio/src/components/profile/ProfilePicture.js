import React from 'react';
import ppImage from "../../images/pp/pp.png"; 
import Profile from "../../styles/profile/ProfilePicture.module.css"

function ProfilePicture() {
  return (
    <img
      src={ppImage}
      alt="Profile Picture"
      className={`rounded-circle mb-3 mx-auto d-block mt-5 ${Profile.ProfileImage}`}
    />
  );
}

export default ProfilePicture;
