import React from 'react';
import { Col, Row } from 'reactstrap';

function About(props) {
  return (
    <>
      <Row className='about-section'>
        <Col>
          <Row>
            <Col className='text-center mt-5'>
              <h1 className='landing-header'>About</h1>
            </Col>
          </Row>
          <Row className='mb-5 mt-3'>
            <Col xs={2} />
            <Col>
              Nam aliquam imperdiet leo et egestas. Aliquam erat volutpat. Cras vitae fringilla mauris. Vivamus laoreet
              ligula vitae lacus tempus porta. Vivamus eu lorem pulvinar, fringilla metus eu, sagittis risus. Nunc ex
              ex, pretium id maximus lacinia, facilisis et elit. Integer placerat libero felis. Fusce tempor tristique
              commodo. Nulla nulla lectus, pellentesque non sapien vel, porta varius leo. Suspendisse porta, ex in
              facilisis lobortis, libero tortor elementum neque, ut tristique elit lacus vitae arcu. Sed aliquam
              tincidunt urna, in fermentum lorem aliquam ut. Cras eget diam varius, varius velit et, vehicula nisl. Nam
              ut volutpat dolor, ut venenatis risus.
            </Col>
            <Col xs={2} />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default About;
