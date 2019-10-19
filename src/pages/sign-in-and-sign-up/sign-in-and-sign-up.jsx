import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <main className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </main>
);

export default SignInAndSignUpPage;
