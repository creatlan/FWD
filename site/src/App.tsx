// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Comic from './components/Comic';

import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/comic" element={<Comic />} />
      </Routes>
    </Router>
  );
};

export default App;
