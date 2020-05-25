import React from 'react';
import styles from '../../css/landing.module.css';
import whyImageOne from "../../images/why-1.png";
import whyImageTwo from "../../images/why-2.png";
import whyImageThree from "../../images/why-3.png";

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
          <a href="/" className={styles.registerButton}>Get Started Now!</a>
        </div>
        <div className={styles.landingBody}>
          <h1>DnD App</h1>
          <h2>Brought to you by Terence Qu</h2>
          <br/>

          {/* What section */}
          <h3>What is this?</h3>
          <p>This DnD App is an easy way of keeping track of everything DnD related. From planning your next big campaign, to keeping track of character sheets and dice, this app has it all!</p>
          <br/>

          {/* Why section */}
          <h3>Why is this a thing?</h3>
          <br/>
          <div className={styles.whyRow}>
            <div>
              <h4>Stop doing taxes!</h4>
              <br/>
              <img src={whyImageOne}></img>
              <br/>
              <p>Sometimes in DnD, you feel like an accountant crunching numbers for a living. With this app, trust that the hard work is done for you.</p>
            </div>
            <div>
              <h4>Keep your friends updated!</h4>
              <br/>
              <img src={whyImageTwo}></img>
              <br/>
              <p>Sharing your characters and campaign details for your group has never been easier! </p>
            </div>
            <div>
              <h4>Everything right where you need it.</h4>
              <br/>
              <img src={whyImageThree}></img>
              <br/>
              <p>All the tools you need are right at your disposal! No more lost papers getting in the way of roleplaying.</p>
            </div>
          </div>
          <br/>

          {/* How section */}
          <h3>How do I use it?</h3>
          <p>Go ahead and register if you haven't made an account, or log in if you already have one! We'll always be glad to have new members!</p>
        </div>
      </div>
    );
  }
}

export default LandingPage;
