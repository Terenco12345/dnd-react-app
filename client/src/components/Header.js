import React from 'react';
import styles from '../css/header.module.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
    
        }
    }
    
    componentDidMount(){
        
    }
    
    
    render(){
        return (
            <div className={styles.headerRoot}>
                <ul>
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;