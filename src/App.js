import React, { Fragment } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Header from './components/Header';
import HomePageContainer from './containers/HomePageContainer';
import Footer from './components/Footer';

const App = () => {

  return (
    <Fragment>
      <Header />
      <HomePageContainer />
      <Footer />
    </Fragment>
  );
}

export default App;
