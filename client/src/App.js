import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

import {
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
import { dark } from '@material-ui/core/styles/createPalette';
import { purple, deepPurple } from '@material-ui/core/colors';

const theme = responsiveFontSizes(createMuiTheme({
  spacing: 4,
  palette: {
    primary: purple,
    secondary: deepPurple
  }
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <BrowserRouter>
          <Header />
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
              <CharacterSheetGalleryPage />
            </Route>
            <Route path="/character-sheet-gallery">
              <CharacterSheetGalleryPage />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
