import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <>
      <Navbar />
      <div className="settings-container">
        <aside className="card menu">
          <h3>Menu</h3>
          <Link to="/settings" className="menu-item settings active">
            <span className="menu-icon"></span>
            <span>Account</span>
          </Link>
          <Link to="/profile" className="menu-item">
            <span className="menu-icon"></span>
            <span>Profile</span>
          </Link>
          <Link to="/settings" className="menu-item">
            <span className="menu-icon"></span>
            <span>Security</span>
          </Link>
          <Link to="/settings" className="menu-item">
            <span className="menu-icon"></span>
            <span>Notifications</span>
          </Link>
          <Link to="/settings" className="menu-item">
            <span className="menu-icon"></span>
            <span>Themes</span>
          </Link>
          <div className="menu-divider"></div>
        </aside>
        <main className="main-content">
          <div className="page-header">
            <div>
              <h1 className="page-title">Account Settings</h1>
              <p className="page-sub">Update your account preferences, manage security, and customise notifications.</p>
            </div>
          </div>
          <section className="section">
            <div className="section-header">
              <h3 className="section-title">Account Basics</h3>
            </div>
            <div className="path-card">
              <h4 className="path-name">Edit your information</h4>
              <p className="path-desc">Update your email, password, and profile details in one place.</p>
            </div>
            <div className="path-card">
              <h4 className="path-name">Security preferences</h4>
              <p className="path-desc">Enable two-factor authentication and manage trusted devices.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
