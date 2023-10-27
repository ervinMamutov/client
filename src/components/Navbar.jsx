import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="/" className="unit">
            Product
          </a>
        </li>
        <li className="menu-item">
          <a href="/add-product" className="unit">
            Add Product
          </a>
        </li>
        <li className="menu-item">
          <a href="/register" className="unit">
            Register
          </a>
        </li>
        <li className="menu-item">
          <a href="log-in" className="unit">
            Log in
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
