import React from 'react';
import Header from "./components/Header";
import styles from "./css/app.module.css";

import{
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";

function App() {
  return (
    <div className = {styles.root}>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
