import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Learning from './pages/Learning.jsx';
import Projects from './pages/Projects.jsx';
import Groups from './pages/Groups.jsx';
import Achievements from './pages/Achievements.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Username from './pages/Username.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  // We use localStorage so it stays dark even if you refresh!
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/profile" element={<Profile />} />
      
      <Route 
        path="/settings" 
        element={<Settings currentTheme={theme} onThemeChange={setTheme} />} 
      />
      
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/username" element={<Username />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;