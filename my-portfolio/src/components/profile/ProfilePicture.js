import React from 'react';
import ppImage from "../../images/pp/pp.png"; // Make sure the image path is correct

function ProfilePicture() {
  return (
    <img
      src={ppImage}
      alt="Profile Picture"
      className="rounded-circle mb-3 mx-auto d-block mt-5"
      style={{ width: "250px", height: "250px", objectFit: "cover" }}
    />
  );
}

export default ProfilePicture;