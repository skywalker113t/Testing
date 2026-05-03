import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import { 
  Circle, 
  CheckCircle2, 
  AlertCircle, 
  Sun, 
  Moon, 
  ShieldCheck, 
  ChevronRight, 
  MessageSquare, 
  Users, 
  EyeOff, 
  BellRing 
} from 'lucide-react';

const securityLevels = [
  { label: 'At Risk', color: '#dc2626', icon: <AlertCircle size={18} /> },
  { label: 'Vulnerable', color: '#f97316', icon: <Circle size={18} /> },
  { label: 'Warning', color: '#fbbf24', icon: <Circle size={18} /> },
  { label: 'Neutral', color: '#94a3b8', icon: <Circle size={18} /> },
  { label: 'Elevated', color: '#3b82f6', icon: <Circle size={18} /> },
  { label: 'Secure', color: '#22c55e', icon: <CheckCircle2 size={18} /> },
];

export default function Settings({ currentTheme, onThemeChange }) {
  const [activeTab, setActiveTab] = useState('themes'); // Defaulting to themes so you can see the fix immediately
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
        </aside>

        {/* CONTENT AREA */}
        <main className="content-box card">
          <div className="content-header">
            <h2 style={{textTransform: 'capitalize'}}>{activeTab} Settings</h2>
            <hr />
          </div>

          <div className="content-body">
            {/* 1. Account */}
            {activeTab === 'account' && (
              <div className="account-settings-flow">
                <section className="settings-section">
                  <h3>Display Identity</h3>
                  <div className="username-card">
                    <div className="current-user-info">
                      <span className="label">Current Username</span>
                      <span className="value">@tech_creator_24</span>
                    </div>
                    <div className="input-group">
                      <label>New Username</label>
                      <input type="text" placeholder="enter_new_username" className="settings-input" />
                    </div>
                    <button className="btn-primary">Update Username</button>
                  </div>
                </section>
              </div>
            )}

            {/* 2. Profile */}
            {activeTab === 'profile' && (
              <div className="profile-settings-editor">
                <section className="settings-section">
                  <h3>Public Profile</h3>
                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Alex Okonkwo" className="settings-input" />
                  </div>
                  <div className="input-group">
                    <label>Bio</label>
                    <textarea placeholder="Bio..." className="settings-input bio-area" />
                  </div>
                </section>
                <button className="save-btn">Save Profile</button>
              </div>
            )}

            {/* 3. Security */}
            {activeTab === 'security' && (
              <div className="security-status-container">
                <h3>Account Security Level</h3>
                <div className="status-steps">
                  {securityLevels.map((level) => (
                    <div key={level.label} className={`status-step ${level.label === 'Secure' ? 'active' : ''}`} style={{ '--brand-color': level.color }}>
                      {level.label === 'Secure' ? level.icon : <Circle size={18} color="#cbd5e1" />}
                      <span className="status-label">{level.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Notifications */}
            {activeTab === 'notifications' && (
  <div className="notifications-flow fade-in">
    {/* Socio Interaction */}
    <div className="setting-row">
      <div className="setting-left">
        <MessageSquare size={20} color="#2563eb" />
        <div className="label-stack">
          <span>Direct Messages</span>
          <p className="sub-label">Private messages from peers and mentors.</p>
        </div>
      </div>
      <input type="checkbox" className="toggle-switch" defaultChecked />
    </div>

    {/* Educational Interaction */}
    <div className="setting-row">
      <div className="setting-left">
        <Users size={20} color="#a855f7" />
        <div className="label-stack">
          <span>Study Group Alerts</span>
          <p className="sub-label">Notifications for new resources in your groups.</p>
        </div>
      </div>
      <input type="checkbox" className="toggle-switch" defaultChecked />
    </div>

    <div className="setting-row">
      <div className="setting-left">
        <BellRing size={20} color="#eab308" />
        <div className="label-stack">
          <span>Deadline Reminders</span>
          <p className="sub-label">Alerts for upcoming course tasks and assignments.</p>
        </div>
      </div>
      <input type="checkbox" className="toggle-switch" defaultChecked />
    </div>
  </div>
)}

            {/* 5. THEMES (FIXED VERSION) */}
            {activeTab === 'themes' && (
              <div className="themes-content-area fade-in">
                <p className="settings-subtitle">Choose how the dashboard looks for you.</p>
                <div className="theme-options-grid">
                  
                  {/* Light Mode Card */}
                  <div 
                    className={`theme-card ${currentTheme === 'light' ? 'active' : ''}`}
                    onClick={() => onThemeChange('light')}
                  >
                    <div className="theme-preview light">
                      <div className="preview-nav"></div>
                      <div className="p-line"></div>
                      <div className="p-line mid"></div>
                    </div>
                    <div className="theme-info">
                      <Sun size={18} />
                      <span>Light Mode</span>
                    </div>
                  </div>

                  {/* Dark Mode Card */}
                  
                  <div className={`theme-card ${currentTheme === 'dark' ? 'active' : ''}`} onClick={() => { 
              console.log("Dark mode card clicked!"); onThemeChange('dark');
              }}
>
                    <div className="theme-preview dark">
                      <div className="preview-nav"></div>
                      <div className="p-line"></div>
                      <div className="p-line mid"></div>
                    </div>
                    <div className="theme-info">
                      <Moon size={18} />
                      <span>Dark Mode</span>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}