import React from 'react';
import styles from '../../css/form.module.css';

const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

class RegisterPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      passwordConfirm: "",

      overallError: "",
      displayNameError: "",
      emailError: "",
      passwordError: "",
      passwordConfirmError: ""
    }
  }
  
  displayNameChangeHandler = (event) => {
    this.setState({displayName: event.target.value});
  }

  emailChangeHandler = (event) => {
    this.setState({email: event.target.value});
  }

  passwordChangeHandler = (event) => {
    this.setState({password: event.target.value});
  }

  passwordConfirmChangeHandler = (event) => {
    this.setState({passwordConfirm: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    if(this.validateClientSide()){
      this.setState({
        displayNameError: "",
        emailError: "",
        passwordError: "",
        passwordConfirmError: ""
      });

      // Send register request

    } else {
      console.log("Register UI: Client side validation of form details failed.");
    }
  }

  validateClientSide = () => {
    let overallError = "";
    let displayNameError = "";
    let emailError = "";
    let passwordError =  "";
    let passwordConfirmError = "";

    let valid = true;

    if(this.state.displayName && this.state.email && this.state.password && this.state.passwordConfirm){
      // Validate the display name
      if(this.state.displayName.length < 6 || this.state.displayName > 14){
        displayNameError = "Display name must be between 6 and 14 characters long (inclusive)!";
        valid = false;
      } else {
        displayNameError = "";
      }

      // Validate the email
      if(!validEmailRegex.test(this.state.email)){
        emailError = "Not a valid email address!";
        valid = false;
      } else {
        emailError = "";
      }

      // Validate the password
      if(!validPasswordRegex.test(this.state.password)){
        passwordError = "Password must be larger than 8 characters, contain 1 lowercase alphabetical character, contain 1 uppercase alphabetical character and 1 numeric character.";
        valid = false;
      } else {
        passwordError = "";
      }

      // Validate the password confirmation
      if(this.state.passwordConfirm !== this.state.password){
        passwordConfirmError = "Password confirmation must be the same as your password!";
        valid = false;
      } else {
        passwordError = "";
      }

    } else {
      overallError = "Cannot leave any fields empty!";
    }

    this.setState({
      overallError: overallError,
      displayNameError: displayNameError,
      emailError: emailError,
      passwordError: passwordError,
      passwordConfirmError: passwordConfirmError
    });
    
    return valid;
  }

  render(){
    return (
        <div className={styles.root}>
            <div className={styles.container}>
              <h1>Register</h1>
              <form onSubmit={this.submitHandler}>
                {this.state.overallError==="" ? null : <h2 className={styles.error}>{this.state.overallError}</h2>}
                <div className={styles.row}>
                  <div>
                    {this.state.displayNameError==="" ? null : <h2 className={styles.error}>{this.state.displayNameError}</h2>}
                    <label htmlFor="displayName">Display Name:</label>
                  </div>
                  <div>
                    <input type="text" id="displayName" value={this.state.displayName} onChange={this.displayNameChangeHandler}></input>
                  </div>
                </div>

                <div className={styles.row}>
                  <div>
                    {this.state.emailError===""? null : <h2 className={styles.error}>{this.state.emailError}</h2>}
                    <label htmlFor="email">Email:</label>
                  </div>
                  <div>
                    <input type="text" id="email" value={this.state.email} onChange={this.emailChangeHandler}></input>
                  </div>
                </div>

                <div className={styles.row}>
                  <div>
                    {this.state.passwordError===""? null : <h2 className={styles.error}>{this.state.passwordError}</h2>}
                    <label htmlFor="password">Password:</label>
                  </div>
                  <div>
                    <input type="password" id="password" value={this.state.password} onChange={this.passwordChangeHandler}></input>
                  </div>
                </div>

                <div className={styles.row}>
                  <div>
                    {this.state.passwordConfirmError==="" ? null : <h2 className={styles.error}>{this.state.passwordConfirmError}</h2>}
                    <label htmlFor="passwordConfirm">Password Confirmation:</label>
                  </div>
                  <div>
                    <input type="password" id="passwordConfirm" value={this.state.passwordConfirm} onChange={this.passwordConfirmChangeHandler}></input>
                  </div>
                </div>

                <div className={styles.row}>
                  <input type="submit" id="register" value="Register"></input>
                </div>
              </form>
            </div>
        </div>
    );
  }
}

export default RegisterPage;