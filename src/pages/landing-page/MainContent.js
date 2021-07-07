import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import image from '../../assets/img/heroImageSample.png';

function MainContent() {
  const history = useHistory();

  return (
    <Row noGutters className='mb-0 mb-md-5 pb-0 pb-md-5'>
      <Col sm='12' md='5' className='main-content d-flex flex-column justify-content-center'>
        <Row noGutters>
          <Col xs={{ offset: 1, size: 11 }}>
            <Row className='mb-3'>
              <Col>
                <h1 className='landing-header'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <h5 className='secondary-header text-secondary'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in commodo est, vitae pulvinar nisi.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  className='mt-2'
                  color='primary'
                  onClick={() => {
                    history.push('/');
                  }}
                >
                  Explore Products
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col sm='12' md='7' className='mt-5 mt-md-0 pt-5 pt-md-0'>
        <Row noGutters>
          <Col className='d-flex flex-column justify-content-center align-items-center image-col'>
            <img src={image} className='hero-image landing-img' alt='checkout complete logo' />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default MainContent;
