import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Layout({ children }) {
  const routes = [
    { title: `About`, path: `/about`, link: true, internal: true },
    { title: `FAQ`, path: `/faq`, link: true, internal: true },
    { title: `Dashboard`, path: `/dashboard`, link: false, internal: true, loginRequired: true }
  ];

  return (
    <div className='layout-wrapper'>
      <Nav routes={routes} />
      {children}
      <Footer showContact routes={routes} />
    </div>
  );
}

export default Layout;
