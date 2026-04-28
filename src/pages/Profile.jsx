import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <main className="main-content">
          <div className="profile-hero">
            <div className="profile-cover">
              <button className="profile-cover-edit">Edit Cover</button>
            </div>
            <div className="profile-body">
              <div className="profile-avatar-row">
                <div className="profile-avatar"></div>
                <div className="profile-actions">
                  <button className="btn-outline">Share Profile</button>
                  <button className="btn-primary" ><a href='profile'>Edit Profile</a></button>
                </div>
              </div>
              <h1 className="profile-name">Alex Okonkwo</h1>
              <p className="profile-handle">@alex.okonkwo · Lagos, Nigeria</p>
              <p className="profile-bio">
                Aspiring data scientist passionate about using Python and machine learning to solve real-world problems.
              </p>
              <div className="profile-tags">
                <span className="profile-tag">Python</span>
                <span className="profile-tag">Data Science</span>
                <span className="profile-tag">UI/UX</span>
                <span className="profile-tag">Open to Collaborate</span>
              </div>
              <div className="profile-meta-row">
                <span className="profile-meta-item">📅 Joined January 2025</span>
                <span className="profile-meta-item">🔥 5-day streak</span>
                <span className="profile-meta-item">🏅 3 Certificates</span>
                <span className="profile-meta-item">👥 Python Cohort #4</span>
              </div>
            </div>
          </div>
          <div className="stats-strip">
            <div className="stat-card">
              <div className="stat-card-num">12</div>
              <div className="stat-card-lbl">Lessons Done</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-num">3</div>
              <div className="stat-card-lbl">Projects Active</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-num">8</div>
              <div className="stat-card-lbl">Group Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-num">1</div>
              <div className="stat-card-lbl">Certificates</div>
            </div>
          </div>
          <section className="section">
            <div className="section-header">
              <h3 className="section-title">Achievements</h3>
              <a href="#" className="see-all">View all →</a>
            </div>
            <div className="badges-grid">
              <div className="badge-item">
                <div className="badge-emoji">🔥</div>
                <p className="badge-name">Streak Starter</p>
                <p className="badge-sub">5-day streak</p>
              </div>
              <div className="badge-item">
                <div className="badge-emoji">🐍</div>
                <p className="badge-name">Python Basics</p>
                <p className="badge-sub">Course complete</p>
              </div>
              <div className="badge-item">
                <div className="badge-emoji">🤝</div>
                <p className="badge-name">Team Player</p>
                <p className="badge-sub">Joined a group</p>
              </div>
              <div className="badge-item">
                <div className="badge-emoji">📦</div>
                <p className="badge-name">First Project</p>
                <p className="badge-sub">Submitted draft</p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="section-header">
              <h3 className="section-title">Recent Activity</h3>
            </div>
            <div className="activity-panel">
              <div className="activity-item">
                <div className="activity-dot" style={{ background: '#dbeafe' }}>📖</div>
                <div>
                  <p className="activity-text">
                    Completed module <strong>Intro to Pandas</strong> in Python for Data Analysis
                  </p>
                  <p className="activity-time">Today · 2 hours ago</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-dot" style={{ background: '#dcfce7' }}>💬</div>
                <div>
                  <p className="activity-text">
                    Posted in <strong>Python Cohort #4</strong> group discussion
                  </p>
                  <p className="activity-time">Yesterday · Tuesday</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-dot" style={{ background: '#fce7f3' }}>🎨</div>
                <div>
                  <p className="activity-text">
                    Enrolled in <strong>UI/UX Design Fundamentals</strong>
                  </p>
                  <p className="activity-time">Monday</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-dot" style={{ background: '#fef3c7' }}>🏅</div>
                <div>
                  <p className="activity-text">
                    Earned the <strong>Python Basics</strong> certificate
                  </p>
                  <p className="activity-time">March 28, 2025</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <aside className="card right-panel">
          <h3>Your Streak</h3>
          <div className="streak-banner">
            <div className="streak-num">🔥 5</div>
            <div className="streak-lbl">Day streak — keep it up!</div>
          </div>
          <div className="menu-divider menu-divider-sm"></div>
          <h3 className="mb-14">People You May Know</h3>
          <div className="connect-item">
            <div className="connect-avatar bg-green">C</div>
            <div className="connect-text">
              <p className="connect-name">Chioma Eze</p>
              <p className="connect-sub">Python Cohort #4</p>
            </div>
            <span className="connect-btn">+ Connect</span>
          </div>
          <div className="connect-item">
            <div className="connect-avatar bg-yellow">D</div>
            <div className="connect-text">
              <p className="connect-name">David Mensah</p>
              <p className="connect-sub">Data Science path</p>
            </div>
            <span className="connect-btn">+ Connect</span>
          </div>
        </aside>
      </div>
    </>
  );
}
