import React from 'react';
import styles from '../../css/form.module.css';
import axios from 'axios';
import { serverIP } from '../../config';
import { setUser } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class LogoutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        axios({
            method: 'post',
            withCredentials: true,
            url: serverIP + '/logout'
        }).then((res) => {
            console.log("Successfully logged out user.");
            this.props.setUser(null);
            this.props.history.push('/');
        }).catch((err) => {
            if (err) {
                this.props.setUser(null);
                this.props.history.push('/');
            }
        });
    }

    render() {
        return (
            <div className={styles.root}>
                <h1>Logging out...</h1>
                <h1>You will be redirected shortly.</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LogoutPage));