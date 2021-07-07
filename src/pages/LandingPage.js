import React, { memo } from 'react';
import Contact from '../components/Contact';
import MainContent from './landing-page/MainContent';
import ProductSection from './landing-page/ProductSection';
import ProductCards from './landing-page/ProductCards';
import moneyBack from '../assets/img/moneyBack.png';
import purchaseImg from '../assets/img/purchaseImg.png';

function LandingPage() {
  return (
    <>
      <MainContent />
      <ProductSection
        orientation='image-left'
        title='Aliquam et purus bibendum, rhoncus libero sit amet, viverra urna'
        text=' In mollis bibendum sem nec gravida. Maecenas vel commodo lacus. Sed tristique efficitur diam, sit amet porttitor sapien lobortis id. Nulla metus dolor, varius vitae lacinia non, venenatis feugiat massa. Morbi finibus auctor porta.'
        image={moneyBack}
        contentColSize={7}
      />
      <ProductCards />
      <ProductSection
        orientation='image-left'
        title='Maecenas ut erat sit amet diam volutpat viverra'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        link='/'
        linkText='Learn More'
        image={purchaseImg}
        contentColSize={6}
      />
      <Contact />
    </>
  );
}

export default memo(LandingPage);
