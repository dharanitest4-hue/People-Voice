import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import ReportIssue from './pages/ReportIssue';
import LiveMap from './pages/LiveMap';
import Analytics from './pages/Analytics';
import AdminPortal from './pages/AdminPortal';
import Community from './pages/Community';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/map" element={<LiveMap />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/admin" element={<AdminPortal />} />
            <Route path="/community" element={<Community />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;