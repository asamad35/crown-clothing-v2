import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.components";

import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.action";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart(displayName, email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password })),
});

export default connect(null, mapDispatchToProps)(SignUp);
