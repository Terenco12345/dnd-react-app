import React from 'react';
import styles from '../css/header.module.css';
import logo from '../images/logo.png';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuEnabled : false
        }
    }
    
    componentDidMount(){
        
    }
    
    render(){
        return (
            <div className={styles.headerRoot}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <div className={styles.header}>
                    <a href="/" className={styles.logo}><img src={logo} alt="Logo"/></a>
                    <a href="#top" className={styles.menuIcon} onClick={()=>{this.toggleMenu()}}>
                        <i className="fa fa-bars" alt="Menu Icon"/>
                    </a>
                </div>
                {this.state.menuEnabled &&
                <div className={styles.linkContainer}>
                    <a href="/">Home Page</a>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                    <a href="/character-sheet-gallery">My Characters</a>
                </div>
                }
            </div>
        );
    }

    toggleMenu(){
        this.setState((state, props)=>{
            return {menuEnabled: !state.menuEnabled}
        })
    }
}

export default Header;