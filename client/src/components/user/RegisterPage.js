import React from 'react';
import styles from '../../css/form.module.css';

import axios from 'axios';
import { serverIP } from '../../config';
import { setUser } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

class RegisterPage extends React.Component {
  constructor(props) {
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
      passwordConfirmError: "",

      redirect: null
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      withCredentials: true,
      url: serverIP + '/current-user'
    }).then((res) => {
      console.log("Successfully authenticated user.");
      this.setState({ redirect: "/current-user" });
    }).catch((err) => {
      if (err) {
        this.setState({ redirect: null });
      }
    });
  }

  displayNameChangeHandler = (event) => {
    this.setState({ displayName: event.target.value });
  }

  emailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  }

  passwordChangeHandler = (event) => {
    this.setState({ password: event.target.value });
  }

  passwordConfirmChangeHandler = (event) => {
    this.setState({ passwordConfirm: event.target.value });
  }

  submitHandler = async (event) => {
    event.preventDefault();

    var successfulRegister = false;

    if (this.validateClientSide()) {
      this.setState({
        overallError: "",
        displayNameError: "",
        emailError: "",
        passwordError: "",
        passwordConfirmError: ""
      });

      // Send register request
      await axios({
        method: 'post',
        url: serverIP + '/register',
        data: {
          displayName: this.state.displayName,
          email: this.state.email,
          password: this.state.password,
        }
      }).then((res) => {
        console.log(res);
        console.log("Account successfully created!");
        successfulRegister = true;
      }).catch((err) => {
        if (err && err.response.status === 400) {
          console.log(err.response);
          this.setState({ overallError: err.response.data });
        }
      });

      // Login if user was successfully created
      if (successfulRegister) {
        await axios({
          method: 'post',
          withCredentials: true,
          url: serverIP + '/login',
          data: {
            email: this.state.email,
            password: this.state.password,
          }
        }).then((res) => {
          // Redirect to current-user
          this.props.setUser(res.data);
          this.props.history.push('/');
        }).catch((err) => {
          if (err) {
            if (err.response !== undefined) {
              this.props.setUser(null);
              this.setState({ overallError: err.response.data });
            }
          }
        });
      }
    } else {
      console.log("Register UI: Client side validation of form details failed.");
    }
  }

  /**
   * This method is used to validate the registration form on the client side.
   */
  validateClientSide = () => {
    let overallError = "";
    let displayNameError = "";
    let emailError = "";
    let passwordError = "";
    let passwordConfirmError = "";

    let valid = true;

    if (this.state.displayName && this.state.email && this.state.password && this.state.passwordConfirm) {
      // Validate the display name
      if (this.state.displayName.length < 6 || this.state.displayName > 14) {
        displayNameError = "Display name must be between 6 and 14 characters long (inclusive)!";
        valid = false;
      } else {
        displayNameError = "";
      }

      // Validate the email
      if (!validEmailRegex.test(this.state.email)) {
        emailError = "Not a valid email address!";
        valid = false;
      } else {
        emailError = "";
      }

      // Validate the password
      if (!validPasswordRegex.test(this.state.password)) {
        passwordError = "Password must be larger than 8 characters, contain 1 lowercase alphabetical character, contain 1 uppercase alphabetical character and 1 numeric character.";
        valid = false;
      } else {
        passwordError = "";
      }

      // Validate the password confirmation
      if (this.state.passwordConfirm !== this.state.password) {
        passwordConfirmError = "Password confirmation must be the same as your password!";
        valid = false;
      } else {
        passwordError = "";
      }

    } else {
      overallError = "Cannot leave any fields empty!";
      valid = false;
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

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <h1>Register</h1>
          <form onSubmit={this.submitHandler}>
            {this.state.overallError === "" ? null : <h2 className={styles.error}>{this.state.overallError}</h2>}
            <div className={styles.row}>
              <div>
                {this.state.displayNameError === "" ? null : <h2 className={styles.error}>{this.state.displayNameError}</h2>}
                <label htmlFor="displayName">Display Name:</label>
              </div>
              <div>
                <input type="text" id="displayName" value={this.state.displayName} onChange={this.displayNameChangeHandler}></input>
              </div>
            </div>

            <div className={styles.row}>
              <div>
                {this.state.emailError === "" ? null : <h2 className={styles.error}>{this.state.emailError}</h2>}
                <label htmlFor="email">Email:</label>
              </div>
              <div>
                <input type="text" id="email" value={this.state.email} onChange={this.emailChangeHandler}></input>
              </div>
            </div>

            <div className={styles.row}>
              <div>
                {this.state.passwordError === "" ? null : <h2 className={styles.error}>{this.state.passwordError}</h2>}
                <label htmlFor="password">Password:</label>
              </div>
              <div>
                <input type="password" id="password" value={this.state.password} onChange={this.passwordChangeHandler}></input>
              </div>
            </div>

            <div className={styles.row}>
              <div>
                {this.state.passwordConfirmError === "" ? null : <h2 className={styles.error}>{this.state.passwordConfirmError}</h2>}
                <label htmlFor="passwordConfirm">Password Confirmation:</label>
              </div>
              <div>
                <input type="password" id="passwordConfirm" value={this.state.passwordConfirm} onChange={this.passwordConfirmChangeHandler}></input>
              </div>
            </div>
            <a href="/login">Already have an account? Go here!</a>
            <div className={styles.row}>
              <input type="submit" id="register" value="Register"></input>
            </div>
          </form>

        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterPage));