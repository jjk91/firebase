import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import React from "react";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "Google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "Github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="Google">
          continue with Google
        </button>
        <button onClick={onSocialClick} name="Github">
          continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
