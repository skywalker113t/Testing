import { useState, useEffect } from "react"; // Added useEffect hook
import { NavLink } from "react-router-dom";
import logo from "../../images/E.png";
import profileImage from "../../images/eeh.jpg";
import settingsIcon from "../../images/download 1.png";
import notificationIcon from "../../images/download 2.png";

export default function Navbar({ currentTheme }) {
  const [isRinging, setIsRinging] = useState(false);

  // Initialize navbar avatar from storage if it exists, otherwise fallback to the default image asset
  const [navbarAvatar, setNavbarAvatar] = useState(() => {
    return localStorage.getItem("educonnect_avatar") || profileImage;
  });

  // Listen for real-time changes broadcasted from Profile.jsx
  useEffect(() => {
    const handleAvatarUpdate = () => {
      const updatedAvatar = localStorage.getItem("educonnect_avatar");
      if (updatedAvatar) {
        setNavbarAvatar(updatedAvatar);
      }
    };

    // Attach event listener for the custom broadcast signal
    window.addEventListener("avatarChanged", handleAvatarUpdate);

    // Clean up listener to prevent memory leaks when component unmounts
    return () => {
      window.removeEventListener("avatarChanged", handleAvatarUpdate);
    };
  }, []);

  const handleBellClick = () => {
    setIsRinging(true);
    // Animation resets after 500ms
    setTimeout(() => setIsRinging(false), 500);
  };

  return (
    <header className={`navbar ${currentTheme || ""}`}>
      <NavLink to="/" className="logo-link">
        <img src={logo} alt="EduConnect" className="nav-icon" />
      </NavLink>

      <nav className="nav-links">
        {/* 1. Notifications Link (First) */}
        <NavLink
          to="/notifications"
          className="logo-link"
          onClick={handleBellClick}
        >
          <img
            src={notificationIcon}
            alt="notifications"
            className={`nav-icon notification-bell ${isRinging ? "ring-active" : ""}`}
          />
        </NavLink>

        {/* 2. Settings Link (Middle) */}
        <NavLink to="/settings" className="logo-link">
          <img
            src={settingsIcon}
            alt="settings"
            className="nav-icon settings-gear"
          />
        </NavLink>

        {/* 3. Profile Link (Last) */}
        <NavLink to="/profile" className="logo-link">
          {/* UPDATED: Changed src from hardcoded profileImage to your real-time navbarAvatar state */}
          <img
            src={navbarAvatar}
            alt="profile"
            className="nav-icon profile-avatar"
            style={{ objectFit: "cover", borderRadius: "50%" }} // Ensures custom uploaded squares crop into perfect circles
          />
        </NavLink>
      </nav>

      <button className="hamburger" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
