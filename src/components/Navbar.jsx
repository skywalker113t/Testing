import { NavLink } from "react-router-dom";
import logo from "../../images/E.png";
import profileImage from "../../images/eeh.jpg";
import settingsIcon from "../../images/download 1.png";
import notificationIcon from "../../images/download 2.png";

export default function Navbar({ currentTheme }) {
  return (
    <header className={`navbar ${currentTheme || ""}`}>
      <NavLink to="/" className="logo-link">
        <img src={logo} alt="EduConnect" className="nav-icon" />
      </NavLink>

      <nav className="nav-links">
        {/* 1. Notifications Link (First) */}
        <NavLink to="/notifications" className="logo-link">
          <img
            src={notificationIcon}
            alt="notifications"
            className="nav-icon"
          />
        </NavLink>

        {/* 2. Settings Link (Middle) */}
        <NavLink to="/settings" className="logo-link">
          <img
            src={settingsIcon}
            alt="settings"
            className="nav-icon settings"
          />
        </NavLink>

        {/* 3. Profile Link (Last) */}
        <NavLink to="/profile" className="logo-link">
          <img src={profileImage} alt="profile" className="nav-icon" />
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
