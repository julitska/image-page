import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="login-button">Login</Link>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link">All Images</Link>
      </div>
    </nav>
  );
}