import React from 'react';
import { Col, Row } from 'reactstrap';

function SaveIndicator({ success, error }) {
  return (
    <>
      {success && (
        <Row>
          <Col xs={0} md={1} />
          <Col>
            <div className='alert-success text-center my-2 py-2'>Success!</div>
          </Col>
          <Col xs={0} md={1} />
        </Row>
      )}
      {error && (
        <Row>
          <Col xs={0} md={1} />
          <Col>
            <div className='alert-danger text-center my-2 py-2'>
              Your changes could not be saved. Please email amstnly@gmail.com for assistance.
            </div>
          </Col>
          <Col xs={0} md={1} />
        </Row>
      )}
    </>
  );
}

export default SaveIndicator;
