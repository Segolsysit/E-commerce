import React from "react";
import "../../styles/admin/adminHomePage.css";
import * as CgIcon from "react-icons/cg";
import * as CiIcon from "react-icons/ci";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-container">
        <CgIcon.CgProfile className="profile-icon" />
        <div className="profile-info">
          <span className="profile-name">Sakthi</span>
          <span className="profile-role">Super Admin</span>
        </div>
      </div>

      <div className="profile-list">
        <ul>
          <li>
            <CgIcon.CgProfile />
            <span>Profile</span>
          </li>
          <li>
            <CiIcon.CiShoppingCart />
            <span>Create Shop</span>
          </li>
          <li>
            <CiIcon.CiSettings />
            <span>Setting</span>
          </li>
          <li>
            <CiIcon.CiLogout />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
