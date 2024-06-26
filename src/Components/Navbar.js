import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './PopupForm.css'; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    return () => window.removeEventListener('resize', showButton);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', showButton);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    closeForm();
  };

  return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              TRVL
              <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  About US
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                    to='/services'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                {/*<Link*/}
                {/*    to='/products'*/}
                {/*    className='nav-links'*/}
                {/*    onClick={closeMobileMenu}*/}
                {/*>*/}
                {/*  Products*/}
                {/*</Link>*/}
              </li>
              <li>
                <button
                    className='nav-links-mobile'
                    onClick={() => {
                      closeMobileMenu();
                      openForm();
                    }}
                >
                  CONTACT US
                </button>
              </li>
            </ul>
            {button && (
                <Button buttonStyle='btn--outline' onClick={() => {openForm();}}>
                  CONTACT US
                </Button>
            )}
          </div>
        </nav>
        {isFormOpen && (
            <div className="form-popup">
              <form className="form-container" onSubmit={handleFormSubmit}>
                <h2>Contact Form</h2>

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email"><b>Email</b></label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone"><b>Phone Number</b></label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="query"><b>Query</b></label>
                <textarea id="query" name="query" rows="4"></textarea>

                <input type="submit" value="Submit" />
                <button type="button" className="close" onClick={closeForm}>Cancel</button>
              </form>
            </div>
        )}
      </>
  );
}

export default Navbar;
