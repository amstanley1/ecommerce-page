import React, { useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button, Col, Collapse, Row } from 'reactstrap';
import { HamburgerSpin } from 'react-animated-burgers';
import logo from '../assets/img/logo/logo192.png';

function Nav(props) {
  const { routes } = props;
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();

  const toggleButton = useCallback(() => setIsActive((prevState) => !prevState), []);

  const goToPath = (route) => {
    if (route.internal) {
      history.push(route.path);
    } else {
      window.location.href = route.path;
    }
  };

  return (
    <>
      <Row noGutters className='nav'>
        <Col>
          <Link to='/'>
            <img className='my-2 ml-5 header-logo landing-img' src={logo} alt='Logo' />
          </Link>
        </Col>
        <Col className='mr-3 d-flex flex-column d-md-none justify-content-center align-items-end'>
          <Row className='mr-2'>
            <HamburgerSpin isActive={isActive} toggleButton={toggleButton} barColor='#313B6E' />
          </Row>
          <div className='mobile-nav mr-2'>
            <Collapse isOpen={isActive} className='bg-primary'>
              <Row>
                {routes.map((route, idx) => {
                  return (
                    <Col key={idx} xs={12} className='py-2 px-4'>
                      <div className='ml-2 mobile-nav-link font-weight-bold my-2' onClick={() => goToPath(route)}>
                        {route.title}
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Collapse>
          </div>
        </Col>
        <Col className='mr-3 text-center d-none d-md-flex justify-content-end align-items-center' xs='8'>
          <Row noGutters>
            {routes.map((route, idx) => {
              return (
                <Col key={idx} xs='auto' className='d-flex flex-column justify-content-center mr-2'>
                  <Button
                    size='md'
                    color={route.link ? 'link' : route.outline ? 'outline-primary' : 'primary'}
                    className='mb-2'
                    onClick={() => goToPath(route)}
                  >
                    {route.title}
                  </Button>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Nav;
