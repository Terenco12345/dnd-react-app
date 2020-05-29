import React from 'react';
import styles from '../css/footer.module.css';

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footerRoot}>
                <h2>Contact us - Tell us if you have any bugs, issues or suggestions!</h2>
                <div className={styles.socialMediaContainer}>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"> </a>
                    <a href="https://twitter.com/Cheese_Gr8er" target="_blank" rel="noopener noreferrer" className="fa fa-twitter"> </a>
                </div>
                <h2>Email: Terenco12345@gmail.com</h2>
            </div>
        );
    }

    toggleMenu() {

    }
}

export default Footer;