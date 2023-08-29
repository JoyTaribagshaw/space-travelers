import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Rockets</Link></li>
        <li><Link to="/missions">Missions</Link></li>
        <li><Link to="/myprofile">My profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;