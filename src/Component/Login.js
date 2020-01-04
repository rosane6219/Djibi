import React from 'react';
import './Login.css';
import nom from '../assets/img/login.png'



class Login extends React.Component {
  render() {
    return (

        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img src={nom} id="icon" alt="User Icon" />
            </div>
            <form>
              <input type="text" id="login" className="fadeIn second" name="login" placeholder="User Id" />
              <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password" />
              <input type="submit" className="fadeIn fourth" value="Log In" />
              <input type="submit" className="fadeIn " value="Sign In" />
            </form>


            <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>

          </div>
        </div>

    )
  }
}
export default Login;