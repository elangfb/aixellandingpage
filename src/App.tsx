import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InvestasiMBG from './pages/InvestasiMBG';
import TumbuhKembang from './pages/TumbuhKembang';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/investasi-mbg" element={<InvestasiMBG />} />
        <Route path="/tumbuh-kembang" element={<TumbuhKembang />} />
      </Routes>
    </Router>
  );
};

export default App;

