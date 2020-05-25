import React from 'react';
import styles from '../css/header.module.css';
import hamburgerIcon from '../images/hamburger-icon.png';
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
                    <a href="/" className={styles.logo}><img src={logo}/></a>
                    <a href="javascript:void(0);" className={styles.menuIcon} onClick={()=>{this.toggleMenu()}}>
                        <i class="fa fa-bars"/>
                    </a>
                </div>
                <div className={this.state.menuEnabled ? styles.linkContainer : styles.linkContainerDisabled}>
                    <a href="/">Home Page</a>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                    <a href="/characters">My Characters</a>
                </div>
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