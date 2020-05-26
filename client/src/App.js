import React from 'react';
import styles from "./css/app.module.css";

import{
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";
import RegisterPage from './components/register/RegisterPage';
import LoginPage from './components/login/LoginPage';
import Header from "./components/Header";
import Footer from "./components/Footer";

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
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
