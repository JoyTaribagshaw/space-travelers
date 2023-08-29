import { Route, Routes } from 'react-router-dom';
import './App.css';
import Rockets from './Components/rockets';
import Navigation from './Components/navigation';
import Missions from './Components/missions';
import Myprofile from './Components/myprofile';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <Rockets /> } />
        <Route path="/missions" element={ <Missions /> } />
        <Route path="/myprofile" element={ <Myprofile /> } />
      </Routes>
    </>
  );
}

export default App;
