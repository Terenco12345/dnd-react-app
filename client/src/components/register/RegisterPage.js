import React from 'react';
import styles from '../../css/register.module.css';

class RegisterPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

  }

  render(){
    return (
        <div className={styles.registerRoot}>
            <div className={styles.container}>
              <h1>Register</h1>
              <form>
                <div className={styles.row}>
                  <div>
                    <label htmlFor="dname">Display Name:</label>
                  </div>
                  <div>
                    <input type="text" id="dname"></input>
                  </div>
                </div>

                <div className={styles.row}>
                  <div>
                    <label htmlFor="email">Email:</label>
                  </div>
                  <div>
                    <input type="text" id="email"></input>
                  </div>
                </div>

                <div className={styles.row}>
                  <div>
                    <label htmlFor="password">Password:</label>
                  </div>
                  <div>
                    <input type="password" id="password"></input>
                  </div>
                </div>

                <div className={styles.row}>
                  <div>
                    <label htmlFor="passwordConfirm">Password Confirmation:</label>
                  </div>
                  <div>
                    <input type="password" id="passwordConfirm"></input>
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