import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Header from './components/Header';
import MyProfileContainer from './containers/MyProfileContainer';
import HomePageContainer from './containers/HomePageContainer';
import Footer from './components/Footer';

const App = () => {

  return (
    <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/my-profile">
            <MyProfileContainer />
          </Route>

          <Route path="/">
            <HomePageContainer />
          </Route>
        </Switch>

        <Footer />
    </BrowserRouter>
  );
}

export default App;
