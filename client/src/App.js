import React from 'react';
import styles from "./css/app.module.css";

import LandingPage from "./components/landing/LandingPage";

function App() {
  return (
    <div className = {styles.root}>
      <LandingPage />
    </div>
  );
}

export default App;
