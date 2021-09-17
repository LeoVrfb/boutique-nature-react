import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Dropdown from './Dropdown';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Tom et Marie
            <i className='fab fa-pagelines' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            
            <li className='nav-item' onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
              <Link
                to='/decoration'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Décoration <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
              <Link
                to='/jardin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Jardin
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/bijoux'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Bijoux
              </Link>
            </li>
            
            
            
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                S'inscrire
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Connexion</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
