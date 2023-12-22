import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './DataContext';
import Home from './Components/Home';
import Profile from './Components/Profile';
import './App.css';

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;