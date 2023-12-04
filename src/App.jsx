import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ActivityCenter from "./pages/ActivityCenter";
import EmailGateAway from "./pages/EmailGateAway";
import Logs from "./pages/Logs";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import Metrics from "./pages/Metrics";

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ActivityCenter" element={<ActivityCenter />} />
          <Route path="/EmailGateAway" element={<EmailGateAway />} />
          <Route path="/Logs" element={<Logs />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Metrics" element={<Metrics />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
