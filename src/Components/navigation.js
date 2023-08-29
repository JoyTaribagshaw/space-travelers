import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li><NavLink to="/myprofile">My profile</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
