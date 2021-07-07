import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink, Nav } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import logo from '../assets/img/logo/logo192.png';

const SideBar = ({ isOpen, setContentType }) => {
  const history = useHistory();

  const goToHome = () => {
    history.push('/');
  };

  return (
    <div className={`sidebar ${isOpen ? 'is-open' : ''}`}>
      <div className='sidebar-header my-3 d-flex justify-content-center pointer' onClick={goToHome}>
        <img width='100' src={logo} alt='Logo' />
      </div>
      <div className='side-menu'>
        <Nav vertical className='list-unstyled pb-3'>
          <p className='text-center font-weight-bold'>Account Settings</p>
          <NavItem className='pointer'>
            <NavLink onClick={() => setContentType('user-profile')}>
              <FontAwesomeIcon icon={faUserCircle} className='mr-2' />
              {isOpen && <span>Profile</span>}
            </NavLink>
          </NavItem>
          <NavItem className='pointer'>
            <NavLink onClick={() => setContentType('branding-config')}>
              <FontAwesomeIcon icon={faPalette} className='mr-2' />
              {isOpen && <span>Configure Branding</span>}
            </NavLink>
          </NavItem>
          <NavItem className='pointer'>
            <NavLink onClick={() => history.push('/')}>
              <FontAwesomeIcon icon={faUser} className='mr-2' />
              Log Out
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setContentType: PropTypes.func.isRequired
};

export default SideBar;
