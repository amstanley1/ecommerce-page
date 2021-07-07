import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <Row className='mb-5 mt-5 justify-content-center'>
      <Col xs='auto' className='text-center d-flex flex-column justify-content-center'>
        <Row className='mb-2'>
          <Col className='mt-2 footer-link font-weight-bold landing-header'>Contact</Col>
        </Row>
        <Row>
          <Col className='footer-link secondary-header text-left'>
            <a href='mailto:amstnly@gmail.com'>
              <div className='d-flex align-items-center mb-3'>
                <FontAwesomeIcon icon={faEnvelope} className='contact-icon mr-3' />
                amstnly@gmail.com
              </div>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Contact;
