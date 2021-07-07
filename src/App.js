import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './container/Layout';
import LandingPage from './pages/LandingPage';
import Faq from './pages/Faq';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

export default function App() {
  const withLayout = (component) => {
    return (
      <Layout>
        <div className='layout-content'>{component}</div>
      </Layout>
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/faq'>{withLayout(<Faq />)}</Route>
        <Route path='/about'>{withLayout(<About />)}</Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/'>{withLayout(<LandingPage />)}</Route>
      </Switch>
    </BrowserRouter>
  );
}
