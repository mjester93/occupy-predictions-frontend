import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
}

export default App;
