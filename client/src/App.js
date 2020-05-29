import React from 'react';
import styles from "./css/app.module.css";

import{
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";
import RegisterPage from './components/user/RegisterPage';
import LoginPage from './components/user/LoginPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharacterSheetGalleryPage from "./components/charactersheet/CharacterSheetGalleryPage";

function App() {
  return (
    <div className = {styles.root}>
      <BrowserRouter>
        <Header/>
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
          <Route path="/current-user">
            <CharacterSheetGalleryPage/>
          </Route>
          <Route path="/character-sheet-gallery">
            <CharacterSheetGalleryPage/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
