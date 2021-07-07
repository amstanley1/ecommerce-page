import React from 'react';
import { motion } from 'framer-motion';
import { Row } from 'reactstrap';

const spinner = {
  transition: {
    loop: Infinity,
    ease: 'linear',
    duration: 0.6
  },
  animate: {
    rotate: 360
  }
};

export default function PageLoader() {
  return (
    <Row>
      <div className='loader-container'>
        <motion.span className='loader-spinner' animate={spinner.animate} transition={spinner.transition} />
      </div>
    </Row>
  );
}
