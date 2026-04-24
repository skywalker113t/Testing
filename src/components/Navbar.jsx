import { NavLink } from 'react-router-dom';
import logo from '../../images/E.png';
import profileImage from '../../images/eeh.jpg';
import settingsIcon from '../../images/download1.png';

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo-link">
        <img src={logo} alt="EduConnect" className="nav-icon" />
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/profile" className="logo-link">
          <img src={profileImage} alt="profile" className="nav-icon" />
        </NavLink>
        <NavLink to="/settings" className="logo-link">
          <img src={settingsIcon} alt="settings" className="nav-icon" />
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
