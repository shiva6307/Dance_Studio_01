import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Styles from './pages/Styles';
import Events from './pages/Events';
import Fitness from './pages/Fitness';
import Shoots from './pages/Shoots';
import Trainers from './pages/Trainers';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/styles" element={<Styles />} />
            <Route path="/events" element={<Events />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/shoots" element={<Shoots />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;