import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import faqPic from '../assets/img/customerSupport.png';

function Faq() {
  const [collapse, setCollapse] = useState(0);

  const toggle = (e) => {
    const {
      target: {
        dataset: { event }
      }
    } = e;

    setCollapse(collapse === Number(event) ? 0 : Number(event));
  };

  return (
    <>
      <Row className='faq-section'>
        <Col xs={12}>
          <Row>
            <Col className='text-center'>
              <img className='faq-img' src={faqPic} alt='Customer Support Illustration' />
            </Col>
          </Row>
        </Col>
        <Col xs={0} md={2} />
        <Col xs={12} md={8} className='mx-3'>
          <Row className='mt-5'>
            <Col>
              <Card style={{ marginBottom: '1rem' }} key={1}>
                <CardHeader
                  className='d-flex justify-content-between align-items-center'
                  onClick={toggle}
                  data-event={1}
                >
                  Morbi viverra lacus turpis, et bibendum velit blandit nec. Nam dapibus viverra sollicitudin. Duis
                  sagittis posuere massa non porttitor?
                  {collapse === 1 ? (
                    <FontAwesomeIcon icon={faAngleDown} onClick={toggle} data-event={1} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleLeft} onClick={toggle} data-event={1} />
                  )}
                </CardHeader>
                <Collapse isOpen={collapse === 1}>
                  <CardBody>
                    Fusce mattis bibendum ante in suscipit. Fusce convallis pretium justo at consectetur. Phasellus
                    nulla lacus, scelerisque ac arcu ac, laoreet consequat sapien. Duis eu fringilla est. Fusce nisl
                    nisl, sagittis a augue quis, viverra iaculis justo. Suspendisse consectetur vitae ligula eget
                    scelerisque. Curabitur maximus odio mauris, vitae consectetur justo imperdiet bibendum. Sed
                    tincidunt viverra augue, in pharetra sem vulputate non.
                  </CardBody>
                </Collapse>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ marginBottom: '1rem' }} key={2}>
                <CardHeader
                  className='d-flex justify-content-between align-items-center'
                  onClick={toggle}
                  data-event={2}
                >
                  Pellentesque non dictum tellus. Aenean pellentesque ex diam, et eleifend eros iaculis eu?
                  {collapse === 2 ? (
                    <FontAwesomeIcon icon={faAngleDown} onClick={toggle} data-event={2} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleLeft} onClick={toggle} data-event={2} />
                  )}
                </CardHeader>
                <Collapse isOpen={collapse === 2}>
                  <CardBody>
                    Duis vel imperdiet ante. Suspendisse non purus imperdiet neque convallis tempor lobortis nec nisi.
                    Integer varius nisl eu accumsan elementum. Nullam dignissim id mauris et euismod. Donec congue
                    laoreet tincidunt. Aliquam tristique dui sed ipsum lacinia, a ultricies tellus commodo. Pellentesque
                    ultricies nisi in sodales fermentum. In commodo enim condimentum, interdum velit quis, lobortis
                    eros. Nunc vel massa quis nunc volutpat finibus. Integer faucibus pretium enim a pulvinar. Nullam
                    venenatis nisi viverra dui pellentesque, vitae dapibus mauris posuere.
                  </CardBody>
                </Collapse>
              </Card>
            </Col>
          </Row>
          <Row className='mb-5'>
            <Col>
              <Card style={{ marginBottom: '1rem' }} key={3}>
                <CardHeader
                  className='d-flex justify-content-between align-items-center'
                  onClick={toggle}
                  data-event={3}
                >
                  Phasellus mollis massa sit amet aliquam elementum?
                  {collapse === 3 ? (
                    <FontAwesomeIcon icon={faAngleDown} onClick={toggle} data-event={3} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleLeft} onClick={toggle} data-event={3} />
                  )}
                </CardHeader>
                <Collapse isOpen={collapse === 3}>
                  <CardBody>
                    Suspendisse dolor ligula, hendrerit a odio nec, malesuada cursus dui. Aliquam eu viverra tellus.
                    Duis vel euismod lacus. Nullam euismod vehicula justo et rutrum. In ut odio fringilla magna
                    condimentum imperdiet. Cras semper cursus consequat. Cras quis arcu ex.
                  </CardBody>
                </Collapse>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Faq;
