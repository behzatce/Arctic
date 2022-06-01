import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './components/menu/ScrollToTop';
import Header from './components/menu/header';
import ViewWinners from './components/pages/viewWinners';
import ItemDetail from './components/pages/itemDetail';
import Apply from './components/pages/apply';
import ProjectForm from './components/pages/projectForm';
import Raffles from './components/pages/raffles';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app= () => (
  <div className="wraper">
  <GlobalStyles />
    <Header />
      <PosedRouter>
      <ScrollTop path="/">
        <Raffles exact path="/">
          <Redirect to="/raffles" />
        </Raffles>
        <ItemDetail path="/itemDetail" />
        <Apply path="/apply" />
        <ProjectForm path="/projectForm" />
        <ViewWinners path="/viewWinners" />
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />   
  </div>
);
export default app;