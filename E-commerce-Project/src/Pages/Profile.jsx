import { useContext } from "react";
import { LoginContext } from "../contexts/loginContext";
import "./Profile.css";
import defaultProfile from "./default-profile.jpg";

const Profile = () => {
  const { loginDetails } = useContext(LoginContext);
  const user = loginDetails[0] || null;

  return (
    <div className="profileContainer">
      <h1 className="profileText text-4xl">My Profile</h1>
      <img src={defaultProfile} alt="Profile" className="profileImage" />
      <h1 className="profileText">{user.email}</h1>
    </div>
  );
};

export default Profile;
