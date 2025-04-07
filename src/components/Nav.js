import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/HomePage">Home</Link></li>
        <li><Link to="/BookingsPage">Bookings</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;