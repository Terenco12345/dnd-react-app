import React from 'react';
import styles from '../../css/profile.module.css';
import { connect } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';
import { withRouter } from 'react-router';

import defaultProfile from '../../images/profiles/default-profile.png';

class ProfilePage extends React.Component{
    render(){
        const user = this.props.user.currentUser;

        if(user){
            return (
                <div className={styles.profileContainer}>
                    <img src={defaultProfile} alt="Profile"></img>
                    <br></br>
                    <button>Change Profile Picture</button>
                    <h1>{user.displayName}</h1>
                    <h2>{user.email}</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage));