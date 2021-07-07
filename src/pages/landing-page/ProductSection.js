import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';

function ProductSection(props) {
  const { orientation, link, title, text, linkText, image, contentColSize } = props;
  const history = useHistory();
  const [imgColSize] = useState(12 - contentColSize);

  return (
    <Row noGutters className='product-section py-5 my-5'>
      <Col xs={{ size: 12, order: 2 }} md={{ size: imgColSize, order: orientation === 'image-left' ? 1 : 2 }}>
        <Row className='section-content'>
          <Col xs={{ offset: 1, size: 10 }} className='d-flex flex-column justify-content-center align-items-center'>
            {image && <img className='section-image landing-img' src={image} alt='checkout complete logo' />}
          </Col>
        </Row>
      </Col>
      <Col xs={{ size: 12, order: 1 }} md={{ size: contentColSize, order: orientation === 'image-right' ? 1 : 2 }}>
        <Row className='section-content'>
          <Col xs={{ offset: 1, size: 10 }} className='d-flex flex-column justify-content-center pb-5 mb-5'>
            <Row>
              <Col>
                <h1 className='landing-header'>{title}</h1>
                <h5 className='secondary-header text-secondary'>{text}</h5>
              </Col>
            </Row>
            {link && (
              <Row>
                <Col>
                  <Button
                    className='mt-2 font-weight-bold p-0'
                    color='link'
                    size='lg'
                    onClick={() => {
                      history.push(link);
                    }}
                  >
                    {linkText}
                  </Button>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

ProductSection.propTypes = {
  orientation: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
  image: PropTypes.string,
  contentColSize: PropTypes.number.isRequired
};

export default ProductSection;
