import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Page Imports
import Dashboard from "./pages/Dashboard.jsx";
import Learning from "./pages/Learning.jsx";
import Projects from "./pages/Projects.jsx";
import Groups from "./pages/Groups.jsx";
import Achievements from "./pages/Achievements.jsx";
import Notifications from "./pages/Notifications.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import Username from "./pages/Username.jsx";
import DashboardPal from "./pages/DashboardPal.jsx";
import NotFound from "./pages/NotFound.jsx";

// This helper component runs inside the Router context safely!
function AppLayout({ theme, setTheme }) {
  const location = useLocation();

  return (
    <>
      {/* Hand the clean location string directly down to the updated Pal component */}
      <DashboardPal currentPath={location.pathname} />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/username" element={<Username />} />
        <Route
          path="/settings"
          element={<Settings currentTheme={theme} onThemeChange={setTheme} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      {/* Renders everything below the router setup wrapper */}
      <AppLayout theme={theme} setTheme={setTheme} />
    </Router>
  );
}
