import React from 'react';
import styles from '../css/header.module.css';
import logo from '../images/logo.png';
import { setUser } from '../redux/actions/userActions';
import { connect } from 'react-redux';
import axios from 'axios';
import { serverIP } from '../config';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuEnabled: false,
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            withCredentials: true,
            url: serverIP + '/current-user'
        }).then((res) => {
            this.props.setUser({ displayName: res.data.user.displayName, email: res.data.user.email });
        }).catch((err) => {
            if (err) {
                console.log("User not found in header.");
            }
        });
    }

    render() {
        return (
            <div className={styles.headerRoot}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <div className={styles.header}>
                    <a href="/" className={styles.logo}><img src={logo} alt="Logo" /></a>
                    {this.props.user &&
                        <a href="/current-user" className={styles.user}><i className="fa fa-user" /></a>
                    }

                    <a href="#top" className={styles.menuIcon} onClick={() => { this.toggleMenu() }}>
                        <i className="fa fa-bars" alt="Menu Icon" />
                    </a>
                </div>
                {this.state.menuEnabled &&
                    <div className={styles.linkContainer}>
                        <a href="/">Home Page</a>
                        {!this.props.user && <a href="/register">Register</a>}
                        {!this.props.user && <a href="/login">Login</a>}
                        {this.props.user && <a href="/profile">My Profile</a>}
                        {this.props.user && <a href="/character-sheet-gallery">My Characters</a>}
                        {this.props.user && <a href="/log-out">Log out</a>}
                    </div>
                }
            </div>
        );
    }

    toggleMenu() {
        this.setState((state, props) => {
            return { menuEnabled: !state.menuEnabled }
        })
    }
}
const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);