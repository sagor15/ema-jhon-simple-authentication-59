import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./SingUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    navigate("/shop");
  }
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two password didn't match ");
      return;
    }
    if (password.length < 6) {
      setError("password must be 6 characters");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sing Up</h2>
      <div className="form-div">
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
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
              onBlur={handlePassword}
              type="password"
              name="password"
              id=""
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPassword}
              type="password"
              name="confirm-password"
              id=""
              placeholder="Enter your Password"
              required
            />
          </div>
          <p style={{ textAlign: "center", color: "red" }}>{error}</p>
          <div className="input-group1">
            <button className="form-submit">Sing Up</button>
            <p className="form-p">
              Already have a account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>

        {/* <p className="or-p">Or</p> */}
        <div className="input-group2">
          <input type="submit" value="Continue with google" />
        </div>
      </div>
    </div>
  );
};

export default SingUp;
