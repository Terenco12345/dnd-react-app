import React from 'react';
import styles from '../../css/landing.module.css';

class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

  }

  render(){
    return(
      <div className={styles.landingRoot}>
        <div className={styles.landingTitle}>
          <a href="/" className={styles.button}>Register</a>
        </div>
      </div>
    );
  }
}

export default LandingPage;
