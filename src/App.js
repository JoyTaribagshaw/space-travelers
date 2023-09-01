import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Rockets from './Components/rockets';
import Navigation from './Components/navigation';
import Missions from './Components/missions';
import Myprofile from './Components/myprofile';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
