import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/");
  }
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              placeholder="Enter your Password"
              required
            />
          </div>
          <p style={{ textAlign: "center", color: "red" }}>{error?.message}</p>
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
