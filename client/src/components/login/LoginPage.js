import React from 'react';
import styles from '../../css/form.module.css';

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      overallError: ""
    }
  }

  componentDidMount(){
    
  }

  emailChangeHandler = (event) => {
    this.setState({email: event.target.value});
  } 

  passwordChangeHandler = (event) => {
    this.setState({password: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();

    // Check if the form is valid and can be sent
    // Most validation should theoretically be done on server side.
    if(this.validateClientSide()){
      this.setState({
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
      });
      
      // Should send a login request to the server.
      
    } else {
      console.log("Login UI: Client side validation of form details failed.");
    }
  }

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
        <div className={styles.root}>
            <div className={styles.container}>
              <h1>Login</h1>
              {this.state.overallError==="" ? null : <h2 className={styles.error}>{this.state.overallError}</h2>}
              <form onSubmit={this.submitHandler}>
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
                  <input type="submit" id="login" value="Login"></input>
                </div>
              </form>
            </div>
        </div>
    );
  }
}

export default LoginPage;