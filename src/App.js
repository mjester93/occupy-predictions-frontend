import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Header from './components/Header';
import MyProfileContainer from './containers/MyProfileContainer';
import Login from './components/Login';
import HomePageContainer from './containers/HomePageContainer';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';

const App = () => {

  return (
    <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/my-profile">
            <MyProfileContainer />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <HomePageContainer />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>

        <Footer />
    </BrowserRouter>
  );
}

export default App;
