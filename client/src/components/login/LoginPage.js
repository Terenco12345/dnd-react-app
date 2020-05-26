import React from 'react';
import styles from '../../css/form.module.css';

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    
  }

  render(){
    return (
        <div className={styles.root}>
            <div className={styles.container}>
              <h1>Login</h1>
              <form>
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
                  <input type="submit" id="login" value="Login"></input>
                </div>
              </form>
            </div>
        </div>
    );
  }
}

export default LoginPage;