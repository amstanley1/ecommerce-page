import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, Col, Row } from 'reactstrap';
import courierExpress from '../../assets/img/courierExpress.jpg';
import world from '../../assets/img/world.jpg';
import mobileShopping from '../../assets/img/mobileShopping.jpg';

function ProductCards() {
  const history = useHistory();

  const products = [
    {
      image: mobileShopping,
      imgAlt: 'Mobile shopping',
      title: 'Download our Mobile App',
      description: 'In at elit laoreet, ornare quam a, rutrum purus. Donec viverra aliquam libero a placerat.',
      buttonText: 'Learn More',
      buttonLink: '/'
    },
    {
      image: world,
      imgAlt: 'Youth holding hands in front of globle',
      title: 'Community Outreach',
      description: 'Nulla ultricies scelerisque massa, quis dictum tortor hendrerit et.',
      buttonText: 'Learn More',
      buttonLink: '/'
    },
    {
      image: courierExpress,
      imgAlt: 'Courier with boxes',
      title: 'Express Shipping',
      description:
        'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean imperdiet enim eget vehicula facilisis.',
      buttonText: 'Learn More',
      buttonLink: '/'
    }
  ];

  return (
    <Row noGutters className='text-center py-5 mb-5 mb-md-5'>
      {products.map((product) => {
        return (
          <Col key={product.title} sm='12' md='4' className='mb-4 mb-md-0 px-3'>
            <Card className='product-card px-3 h-100'>
              <Row className='my-2 font-weight-bold'>
                <Col className='font-weight-bold product-title'>{product.title}</Col>
              </Row>
              <Row className='font-weight-bold'>
                <Col>
                  <div className='card-image-container'>
                    <img src={product.image} className='card-image landing-img' alt={product.imgAlt} />
                  </div>
                </Col>
              </Row>
              <Row className='font-weight-bold my-2'>
                <Col className='font-weight-bold product-text text-secondary'>{product.description}</Col>
              </Row>
              <Row className='flex-grow-1'>
                <Col>
                  <Button
                    className='font-weight-bold mb-3 mt-2'
                    color='secondary'
                    onClick={() => {
                      history.push(product.buttonLink);
                    }}
                  >
                    {product.buttonText}
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default ProductCards;
