import React, {useState} from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";
import RegisterPage from './components/user/RegisterPage';
import LoginPage from './components/user/LoginPage';
import ProfilePage from "./components/user/ProfilePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharacterSheetGalleryPage from "./components/charactersheet/CharacterSheetGalleryPage";
<<<<<<< HEAD
import { purple, deepPurple, indigo, lightBlue } from '@material-ui/core/colors';
=======
import ProfilePage from "./components/user/ProfilePage";
>>>>>>> origin/master

function App() {
  const [theme, setTheme] = useState({
    palette: {
      type: "light",
      primary: purple,
      secondary: deepPurple
    }
  });

  const toggleDarkTheme = () => {
    if(theme.palette.type === "light"){
      setTheme({
        palette: {
          type: "dark",
          primary: indigo,
          secondary: lightBlue
        }
      });
    } else {
      setTheme({
        palette: {
          type: "light",
          primary: purple,
          secondary: deepPurple
        }
      });
    }
  };

  const muiTheme = responsiveFontSizes(createMuiTheme(theme));

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header themeType = {theme.palette.type} toggleDarkTheme = {toggleDarkTheme}/>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
<<<<<<< HEAD
          <Route path="/current-user">
            <CharacterSheetGalleryPage />
=======
          <Route exact path="/profile">
            <ProfilePage/>
>>>>>>> origin/master
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
