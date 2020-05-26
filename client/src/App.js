import React from 'react';
import Header from "./components/Header";
import styles from "./css/app.module.css";

import{
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";
import RegisterPage from './components/register/RegisterPage';

function App() {
  return (
    <div className = {styles.root}>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
