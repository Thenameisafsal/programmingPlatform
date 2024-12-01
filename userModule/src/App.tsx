import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './components/notifications/NotificationProvider';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import InterviewPrep from './pages/InterviewPrep';
import Settings from './pages/Settings';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/interview-prep" element={<InterviewPrep />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;