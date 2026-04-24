import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <main className="main-content">
          <div className="welcome-banner">
            <div className="welcome-text">
              <p className="welcome-sub">Good Morning 👋</p>
              <h2 className="welcome-name">Welcome Back, Alex</h2>
              <p className="welcome-desc">
                You're on a <strong>5-day streak</strong>. Keep it going!
              </p>
            </div>
            <div className="welcome-stats">
              <div className="stat-chip">
                <span className="stat-num">12</span>
                <span className="stat-lbl">Lessons Done</span>
              </div>
              <div className="stat-chip">
                <span className="stat-num">3</span>
                <span className="stat-lbl">Projects Active</span>
              </div>
              <div className="stat-chip">
                <span className="stat-num">8</span>
                <span className="stat-lbl">Group Members</span>
              </div>
            </div>
          </div>

          <section className="section">
            <div className="section-header">
              <h3 className="section-title">Current Learning Path</h3>
              <a href="#" className="see-all">See all →</a>
            </div>
            <div className="path-card">
              <div className="path-top">
                <div className="path-badge">Python</div>
                <span className="path-week">Week 3 of 8</span>
              </div>
              <h4 className="path-name">Python for Data Analysis</h4>
              <p className="path-desc">
                Master pandas, NumPy, and data visualisation through hands-on projects.
              </p>
              <div className="path-progress-wrap">
                <div className="path-progress-fill w-37"></div>
              </div>
              <div className="path-meta">
                <span>37% complete</span>
                <span>Next: Data Cleaning with Pandas →</span>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              <h3 className="section-title">This Week's Milestones</h3>
              <span className="badge-count">2 / 4 done</span>
            </div>
            <div className="milestones-grid">
              <div className="milestone done">
                <div className="ms-check">✓</div>
                <div>
                  <p className="ms-title">Watch lesson videos</p>
                  <p className="ms-sub">Completed Monday</p>
                </div>
              </div>
              <div className="milestone done">
                <div className="ms-check">✓</div>
                <div>
                  <p className="ms-title">Join group discussion</p>
                  <p className="ms-sub">Completed Tuesday</p>
                </div>
              </div>
              <div className="milestone">
                <div className="ms-check pending">○</div>
                <div>
                  <p className="ms-title">Submit project draft</p>
                  <p className="ms-sub">Due Friday</p>
                </div>
              </div>
              <div className="milestone">
                <div className="ms-check pending">○</div>
                <div>
                  <p className="ms-title">Peer review (2 projects)</p>
                  <p className="ms-sub">Due Sunday</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              <h3 className="section-title">Accountability Group</h3>
              <a href="#" className="see-all">View group →</a>
            </div>
            <div className="group-card">
              <div className="group-info">
                <p className="group-name">🐍 Python Cohort #4</p>
                <p className="group-checkin">
                  Next check-in: <strong>Friday 6 PM</strong>
                </p>
              </div>
              <div className="members-row">
                <div className="member-avatar bg-blue" title="You">A</div>
                <div className="member-avatar bg-green" title="Chioma">C</div>
                <div className="member-avatar bg-yellow" title="David">D</div>
                <div className="member-avatar bg-pink" title="Fatima">F</div>
                <div className="member-avatar bg-purple" title="Kwame">K</div>
                <div className="member-more">+3</div>
              </div>
            </div>
          </section>
        </main>

        <aside className="card trending">
          <h3>Trending Skills</h3>
          <div className="trend-item">
            <div className="trend-info">
              <span className="trend-icon bg-blue">Py</span>
              <div>
                <p className="trend-name">Python</p>
                <p className="trend-sub">Data & Automation</p>
              </div>
            </div>
            <span className="trend-badge hot">🔥 Hot</span>
          </div>
          <div className="trend-item">
            <div className="trend-info">
              <span className="trend-icon bg-green">UI</span>
              <div>
                <p className="trend-name">UI/UX Design</p>
                <p className="trend-sub">Figma + Research</p>
              </div>
            </div>
            <span className="trend-badge new">New</span>
          </div>
          <div className="trend-item">
            <div className="trend-info">
              <span className="trend-icon bg-yellow">ML</span>
              <div>
                <p className="trend-name">Machine Learning</p>
                <p className="trend-sub">Sci-kit, TensorFlow</p>
              </div>
            </div>
            <span className="trend-badge rising">↑ Rising</span>
          </div>
          <div className="trend-item">
            <div className="trend-info">
              <span className="trend-icon bg-pink">Biz</span>
              <div>
                <p className="trend-name">Business Writing</p>
                <p className="trend-sub">Proposals & Pitches</p>
              </div>
            </div>
            <span className="trend-badge">Popular</span>
          </div>
          <div className="menu-divider menu-divider-lg"></div>
          <h3 className="mb-14">Upcoming Events</h3>
          <div className="event-item">
            <div className="event-date">
              <span className="ev-day">Thu</span>
              <span className="ev-num">10</span>
            </div>
            <div className="event-info">
              <p className="event-name">Python Office Hour</p>
              <p className="event-sub">Live workshop with mentors</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
