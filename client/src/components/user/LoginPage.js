import React from 'react';
import axios from 'axios';
import { serverIP } from '../../config';
import { setUser } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      overallError: "",
    }
  }

  emailChangeHandler = (event) => {
    this.setState({email: event.target.value});
  } 

  passwordChangeHandler = (event) => {
    this.setState({password: event.target.value});
  }

  submitHandler = async (event) => {
    event.preventDefault();

    // Check if the form is valid and can be sent
    // Most validation should theoretically be done on server side.
    if(this.validateClientSide()){
      this.setState({
        emailError: "",
        passwordError: "",
      });
      
      // Should send a login request to the server.
      await axios({
        method: 'post',
        withCredentials: true,
        url: serverIP+'/login',
        data: {
          email: this.state.email,
          password: this.state.password,
        }
      }).then((res)=>{
        // Redirect to current-user
        this.props.setUser(res.data);
        this.props.history.push('/');
      }).catch((err)=>{
        if(err){
          if(err.response !== undefined){
            this.setState({overallError: err.response.data});
          }
        }
      });
    } else {
      console.log("Login UI: Client side validation of form details failed.");
    }
  }

  /**
   * This method is used to validate the login form on the client side.
   */
  validateClientSide = () => {
    let emailError = "";
    let passwordError = "";
    let overallError = "";
    let valid = true;

    if(!(this.state.email && this.state.password)){
      overallError = "Cannot leave any fields empty!";
      valid = false;
    } else {
      overallError = "";
    }

    this.setState({
      emailError: emailError,
      passwordError: passwordError,
      overallError: overallError
    });

    return valid;
  }

  render(){
    return (
        <div>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));