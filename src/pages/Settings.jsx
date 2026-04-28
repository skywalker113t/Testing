import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import { Circle, CheckCircle2, AlertCircle } from 'lucide-react';
import { ShieldCheck, ChevronRight, Lock } from 'lucide-react';
import { MessageSquare, Users, EyeOff, BellRing } from 'lucide-react';

const securityLevels = [
  { label: 'At Risk', color: '#dc2626', icon: <AlertCircle size={18} /> },
  { label: 'Vulnerable', color: '#f97316', icon: <Circle size={18} /> },
  { label: 'Warning', color: '#fbbf24', icon: <Circle size={18} /> },
  { label: 'Neutral', color: '#94a3b8', icon: <Circle size={18} /> },
  { label: 'Elevated', color: '#3b82f6', icon: <Circle size={18} /> },
  { label: 'Secure', color: '#22c55e', icon: <CheckCircle2 size={18} /> },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState(null);
  const menuItems = ['Account', 'Profile', 'Security', 'Notifications', 'Themes'];

  return (
    <>
      <Navbar />
      <div className={`settings-container ${activeTab ? 'split-view' : 'centered-view'}`}>
        
        {/* SIDEBAR / MENU */}
        <aside className="card menu">
          <h3>Menu</h3>
          {menuItems.map((item) => (
            <div 
              key={item}
              className={`menu-item ${activeTab === item.toLowerCase() ? 'active' : ''}`} 
              onClick={() => setActiveTab(item.toLowerCase())}
            >
              <span>{item}</span>
            </div>
          ))}
          <div className="menu-divider"></div>
        </aside>

        {/* CONTENT AREA */}
        {activeTab && (
          <main className="content-box card">
            <div className="content-header">
              <h2 style={{textTransform: 'capitalize'}}>{activeTab} Settings</h2>
              <hr />
            </div>

            <div className="content-body">
              {/* --- ADD YOUR CONTENT HERE --- */}

              {/* 1. Account Specific Content */}
              {activeTab === 'account' && (
                <div className="account-settings-flow">
                  
                  {/* Username Section */}
                  <section className="settings-section">
                    <h3>Display Identity</h3>
                    <p className="section-desc">This is how other users will see you on the platform.</p>
                    
                    <div className="username-card">
                      <div className="current-user-info">
                        <span className="label">Current Username</span>
                        <span className="value">@tech_creator_24</span>
                      </div>
                      
                      <div className="input-group">
                        <label htmlFor="new-username">New Username</label>
                        <div className="input-wrapper">
                          <span className="at-symbol">@</span>
                          <input 
                            id="new-username"
                            type="text" 
                            placeholder="enter_new_username" 
                            className="settings-input"
                          />
                        </div>
                        <p className="input-hint">Username must be unique and can only contain letters, numbers, and underscores.</p>
                      </div>
                      
                      <button className="btn-primary">Update Username</button>
                    </div>
                  </section>
              
                  <div className="menu-divider" style={{margin: '40px 0'}}></div>
              
                  {/* Email/Other Section */}
                  <section className="settings-section">
                    <h3>Email Address</h3>
                    <div className="input-group">
                      <input type="email" placeholder="email@example.com" className="settings-input" />
                      <button className="btn-secondary">Change Email</button>
                    </div>
                  </section>
                </div>
              )}
              

              {/* 2. Profile Specific Content */}
              {activeTab === 'profile' && (
  <div className="profile-settings-editor">
    
    {/* Section 1: Public Identity */}
    <section className="settings-section">
      <h3>Public Profile</h3>
      <p className="section-desc">Manage how you appear to the community.</p>
      
      <div className="input-group">
        <label>Full Name</label>
        <input type="text" placeholder="Alex Okonkwo" className="settings-input" />
      </div>

      <div className="input-group">
        <label>Bio</label>
        <textarea 
          placeholder="e.g. Aspiring data scientist passionate about Python..." 
          className="settings-input bio-area"
        />
      </div>
    </section>

    {/* Section 2: Skills & Badges */}
    <section className="settings-section">
      <h3>Skills & Expertise</h3>
      <div className="skills-manager">
        <input type="text" placeholder="Add a skill (e.g. React, Python)" className="settings-input" />
        <div className="skills-preview-list">
          <span className="skill-tag">Python ✕</span>
          <span className="skill-tag">Data Science ✕</span>
        </div>
      </div>
    </section>

    {/* Section 3: Professional Status */}
    <section className="settings-section">
      <h3>Collaboration</h3>
      <div className="input-group">
        <label>Current Status</label>
        <select className="settings-input">
          <option>Open to Collaborate</option>
          <option>Focused on Learning</option>
          <option>Open for Work</option>
          <option>Offline</option>
        </select>
      </div>
    </section>

    <button className="save-btn">Save Profile</button>
  </div>
)}

{activeTab === 'security' && (
  <div className="security-status-container">
  <h3>Account Security Level</h3>
  <div className="status-steps">
    {securityLevels.map((level, index) => {
      // Logic: Highlight the level if it's the current one (let's assume 'Secure' for now)
      const isCurrent = level.label === 'Secure'; 
      
      return (
        <div 
          key={level.label} 
          className={`status-step ${isCurrent ? 'active' : ''}`}
          style={{ '--brand-color': level.color }}
        >
          <span className="status-icon">
            {isCurrent ? level.icon : <Circle size={18} color="#cbd5e1" />}
          </span>
          <span className="status-label">{level.label}</span>
        </div>
      );
    })}
  </div>
    {/* 2. Password Section */}
    {/* Section 1: Security Health (The blue box at the top) */}
{/* Section 2: Login Credentials (THIS needs the margin) */}
<section className="settings-section"> 
  <h3>Login Credentials</h3>
  <div className="password-info">
    <p className="hint">Last changed: 3 months ago</p>
    <button className="update-btn">Update Password</button>
  </div>
</section>



 {/* 3. Two-Factor Authentication (The Flex) */}

<section className="settings-section spiced-card">
  <div className="flex-between">
    <div className="security-info-group">
      <div className="icon-box-blue">
        <ShieldCheck size={24} color="#2563eb" />
      </div>
      <div className="text-stack">
        <h3>Two-Factor Authentication</h3>
        <p className="section-desc">Secure your account with an extra login step.</p>
      </div>
    </div>

    {/* This part looks really "Pro" */}
    <div className="action-wrapper" onClick={() => {/* Add your logic here */}}>
      <span className="status-indicator off">Not Enabled</span>
      <ChevronRight size={20} color="#94a3b8" />
    </div>
  </div>
</section>

    {/* 4. Active Sessions */}
    <section className="settings-section">
      <h3>Where you're logged in</h3>
      <div className="session-item">
        <div className="session-icon">💻</div>
        <div className="session-details">
          <strong>Windows · Chrome</strong>
          <span>Lagos, Nigeria · <span className="active-now">Active Now</span></span>
        </div>
      </div>
      <button className="text-btn-danger">Sign out of all other devices</button>
    </section>
  </div>
)}

{/* Notification Settings */}

{activeTab === 'notifications' && (
  <div className="notifications-flow">
    
    {/* 1. Direct Messages Section */}
    <h4 className="tiny-title">Messaging</h4>
    <div className="settings-list-group margin-bottom-32">
      <div className="setting-row">
        <div className="setting-label">
          <MessageSquare size={18} color="#2563eb" />
          <div className="label-stack">
            <span>Direct Messages</span>
            <p className="sub-label">Private messages from other students/teachers.</p>
          </div>
        </div>
        <input type="checkbox" className="toggle-switch" defaultChecked />
      </div>

      <div className="setting-row">
        <div className="setting-label">
          <Users size={18} color="#2563eb" />
          <div className="label-stack">
            <span>Group Chat Mentions</span>
            <p className="sub-label">Only notify when someone @mentions you.</p>
          </div>
        </div>
        <input type="checkbox" className="toggle-switch" defaultChecked />
      </div>
    </div>

    <div className="setting-row">
  <div className="setting-left">
    <MessageSquare size={20} color="#2563eb" />
    <div className="label-stack">
      <span>Direct Messages</span>
      <p className="sub-label">Private messages from other students/teachers.</p>
    </div>
  </div>
  
  <input type="checkbox" className="toggle-switch" defaultChecked />
</div>
    {/* 2. Privacy & Focus Section */}
    <h4 className="tiny-title">Privacy & Focus</h4>
    <div className="settings-list-group">
      <div className="setting-row">
        <div className="setting-label">
          <EyeOff size={18} color="#64748b" />
          <div className="label-stack">
            <span>Show Message Preview</span>
            <p className="sub-label">Hide message content in lock screen alerts.</p>
          </div>
        </div>
        <input type="checkbox" className="toggle-switch" />
      </div>

      <div className="setting-row">
        <div className="setting-label">
          <BellRing size={18} color="#64748b" />
          <div className="label-stack">
            <span>Study Mode</span>
            <p className="sub-label">Mute all social pings during school hours.</p>
          </div>
        </div>
        <input type="checkbox" className="toggle-switch" />
      </div>
    </div>

  </div>
)}

            </div>
          </main>
        )}
      </div>
    </>
  );
}
