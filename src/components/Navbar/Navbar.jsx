import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaImage, FaTimes } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { IconContext } from 'react-icons/lib';
import './Navbar.scss';
import PropTypes from 'prop-types';

const Navbar = ({ title, iconStyles, navLinkStyles }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff', fontSize: '22px' }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              to="/"
              className="navbar-logo"
              onClick={closeMobileMenu}
              onBlur={closeMobileMenu}
            >
              <FaImage className={iconStyles} />
              <p className="lead">{title}</p>
            </Link>
            <div
              className="menu-icon"
              onClick={handleClick}
              onBlur={handleClick}
            >
              {click ? <FaTimes /> : <GoThreeBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link
                  to="/"
                  className={navLinkStyles}
                  onClick={closeMobileMenu}
                  onBlur={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={navLinkStyles}
                  onClick={closeMobileMenu}
                  onBlur={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/random"
                  className={navLinkStyles}
                  onClick={closeMobileMenu}
                  onBlur={closeMobileMenu}
                >
                  Random
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

Navbar.defaultProps = {
  title: 'Image App',
  iconStyles: 'navbar-icon',
  navLinkStyles: 'nav-links',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Navbar;
