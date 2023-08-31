import { NavLink } from 'react-router-dom';
import img from '../assets/planet.png';

function Navigation() {
  return (
    <nav className="px-16 py-8 flex justify-between items-center border-b-2 text-blue-500 w-full">
      <div className="flex items-center gap-4">
        <img src={img} alt="" height={50} width={50} />
        <h1 className="text-black text-lg">Space Travelers Hub</h1>
      </div>
      <ul className="flex gap-4 border-b-slate-400">
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li><NavLink to="/myprofile">My profile</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
