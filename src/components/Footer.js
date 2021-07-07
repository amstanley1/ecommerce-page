import React from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/img/logo/logo192.png';

function Footer(props) {
  const { routes } = props;

  return (
    <Row noGutters className='bg-primary footer pb-3 pb-md-0'>
      <Col xs={12} md={6}>
        <Row className='px-5 py-3'>
          <Col className='d-flex align-items-center justify-content-center'>
            <img src={logo} alt='React Logo' style={{ width: '100px' }} />
            <div
              className='ml-4 d-inline-block'
              style={{ height: '30px', width: '30px', cursor: 'pointer' }}
              onClick={() => {
                window.open('https://twitter.com/ashmstanley', '_blank');
              }}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ display: 'inline-block', color: 'white', height: '30px', width: '30px' }}
              />
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={6} className='d-flex flex-column align-items-center justify-content-center'>
        <Row className='ml-2 ml-md-0 mr-2 mb-3'>
          {routes.map((route, idx) => {
            return (
              <Col key={idx} xs={6} sm='auto'>
                <Link className='font-weight-bold footer-link' to={route.path}>
                  {route.title}
                </Link>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col className='footer-link'>
            {`© ${new Date().getFullYear()} `}
            All rights reserved.
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Footer;
