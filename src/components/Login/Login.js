import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <div className="form-div">
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" placeholder="Enter Your Email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" placeholder="Enter your Password" required />
          </div>
          <div className="input-group1">
            <button className="form-submit">Login</button>
            <p className="form-p">
              New to Ema-Jhon ? <Link to="/singup">Create a New Account</Link>
            </p>
          </div>
        </form>

        <p className="or-p">Or</p>
        <div className="input-group2">
          <input type="submit" value="Continue with google" />
        </div>
      </div>
    </div>
  );
};

export default Login;
