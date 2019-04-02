import React, { Component } from 'react';
import '../css/Login.css';

class Login extends Component {

  render(){
    return (
      <div className='login'>
        <h1>this is the login page</h1>
        <form>
          <label>Email:
            <input type="email" name="email" />
          </label><br></br>
          <label>
            Password:
            <input type="text" name="password" />
          </label><br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default Login;
