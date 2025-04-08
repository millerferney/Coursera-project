import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <ul>
        <li><Link to="/" aria-label="Navigate to Home">Home</Link></li>
        <li><Link to="/bookings" aria-label="Navigate to Bookings">Bookings</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;