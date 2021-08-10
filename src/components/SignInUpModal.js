import React, { useState } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import {
  auth,
  db,
  facebookProvider,
  provider,
  twitterProvider,
} from "../firebase";
import firebase from "firebase/app";

function SignInUpModal() {
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const [loginEmail, setLoginEmail] = useState(null);
  const [loginEmailError, setLoginEmailError] = useState(null);

  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [loginPassword, setLoginPassword] = useState(null);
  const [loginPasswordError, setLoginPasswordError] = useState(null);

  const [confirmPassword, setConfirmPassword] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const [firstName, setFirstName] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);

  const [secondName, setSecondName] = useState(null);
  const [secondNameError, setSecondNameError] = useState(null);

  const [agree, setAgree] = useState(false);
  const [agreeError, setAgreeError] = useState(null);

  const [remember, setRemember] = useState(false);

  let emailRef = useRef(null);
  let registerRef = useRef(null);
  let loginRef = useRef(null);
  let signingRef = useRef(null);

  const apiKey = process.env.REACT_APP_MAP_API_KEY;

  let buttonref = useRef(null);
  let signOutRef = useRef(null);

  const { user, signup, login } = useAuth();
  signingRef = (element) => {
    if (element) {
      element.onclick = async (e) => {
        e.preventDefault();

        if (!loginEmail?.trim()) {
          setLoginEmailError("email is required");
        }

        if (!loginPassword?.trim()) {
          setLoginPasswordError("password is required");
        }

        if (!remember) {
          await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
        }
        if (remember) {
          await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        }

        if (loginEmail && loginPassword) {
          try {
            await login(loginEmail, loginPassword)
              .then(() => {
                window.location.href = "/";
              })
              .catch((err) => {
                if (err.code === "auth/wrong-password") {
                  toast.warn(
                    <span className="alertText">Password is incorrect!</span>,
                    {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );

                  return;
                }
                if (err.code === "auth/user-not-found") {
                  toast.warn(
                    <span className="alertText">User does not exist!</span>,
                    {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                  return;
                }

                toast.error(
                  <span className="alertText">
                    An error occurred. Please try again later!
                  </span>,
                  {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  }
                );
              });
          } catch (err) {
            toast.error(
              <span className="alertText">
                An error occurred. Please try again later!
              </span>,
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }
        }
      };
    }
  };

  registerRef = (element) => {
    if (element) {
      element.onclick = async (e) => {
        e.preventDefault();
        if (!email?.trim()) {
          setEmailError("email is required");
        }
        if (!password?.trim()) {
          setPasswordError("password is required");
        }
        if (!confirmPassword?.trim()) {
          setConfirmPasswordError("password confirmation is required");
        }
        if (!firstName?.trim()) {
          setFirstNameError("first name is required");
        }
        if (!secondName?.trim()) {
          setSecondNameError("second name is required");
        }
        if (!agree) {
          setAgreeError("please agree to continue");
        }
        if (password !== confirmPassword) {
          setConfirmPasswordError("Passwords do not match");
        }
        if (
          email &&
          password &&
          confirmPassword &&
          firstName &&
          secondName &&
          agree &&
          password === confirmPassword
        ) {
          try {
            await signup(email, password)
              .then((user) => {
                db.collection("users")
                  .doc(user.uid)
                  .set(
                    {
                      firstname: firstName,
                      secondname: secondName,
                    },
                    { merge: true }
                  )
                  .then(() => {
                    window.location.href = "/";
                  });
              })
              .catch((err) => {
                if (err.code === "auth/weak-password") {
                  setPasswordError("Password should be at least 6 characters");
                  return;
                }
                if (err.code === "auth/invalid-email") {
                  setEmailError("Please enter a valid email address");
                  return;
                }
                if (err.code === "auth/email-already-in-use") {
                  toast.error(
                    <span className="alertText">
                      Email address already exists!
                    </span>,
                    {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                  return;
                }

                toast.error(
                  <span className="alertText">
                    An error occurred. Please try again later!
                  </span>,
                  {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  }
                );
              });
          } catch (e) {
            toast.error(
              <span className="alertText">
                An error occurred. Please try again later!
              </span>,
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }
        }
      };
    }
  };

  loginRef = (element) => {
    if (element) {
      element.querySelector(".email").onchange = (e) => {
        setLoginEmail(e.target.value);
        setLoginEmailError(null);
      };
      element.querySelector(".password").onchange = (e) => {
        setLoginPassword(e.target.value);
        setLoginPasswordError(null);
      };

      element.querySelector(".remember").onchange = (e) => {
        if (element.querySelector(".remember").checked) {
          setRemember(true);
        } else {
          setRemember(false);
        }
      };
    }
  };

  emailRef = (element) => {
    if (element) {
      element.querySelector(".email").onchange = (e) => {
        setEmail(e.target.value);
        setEmailError(null);
      };
      element.querySelector(".password").onchange = (e) => {
        setPassword(e.target.value);
        setPasswordError(null);
      };
      element.querySelector(".confirmpassword").onchange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(null);
      };
      element.querySelector(".firstName").onchange = (e) => {
        setFirstName(e.target.value);
        setFirstNameError(null);
      };
      element.querySelector(".secondName").onchange = (e) => {
        setSecondName(e.target.value);
        setSecondNameError(null);
      };
      element.querySelector(".agree").onchange = (e) => {
        if (element.querySelector(".agree").checked) {
          setAgree(true);
        } else {
          setAgree(false);
        }

        setAgreeError(null);
      };
    }
  };

  buttonref = (element) => {
    if (element) {
      element.querySelector(".google-login").onclick = () => {
        auth
          .signInWithPopup(provider)
          .then((res) => {
            window.location.href = "/";
          })
          .catch((err) => {
            toast.warn(
              <span className="alertText">
                An error occurred. Please try again!
              </span>,
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          });
      };
      element.querySelector(".facebook-login").onclick = () => {
        auth
          .signInWithPopup(facebookProvider)
          .then((res) => {
            window.location.href = "/";
          })
          .catch((err) => {
            toast.warn(
              <span className="alertText">
                An error occurred. Please try siging again!
              </span>,
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          });
      };
      element.querySelector(".twitter-login").onclick = () => {
        auth
          .signInWithPopup(twitterProvider)
          .then((res) => {
            window.location.href = "/";
          })
          .catch((err) => {
            toast.warn(
              <span className="alertText">
                An error occurred. Please try siging again!
              </span>,
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          });
      };
    }
  };

  signOutRef = (element) => {
    if (element && user) {
      element.querySelector(".sign-out").onclick = () => {
        auth.signOut().then((res) => {
          window.location.href = "/";
        });
      };
    }
  };
  return (
    <div
      id="utf-signin-dialog-block"
      className="zoom-anim-dialog mfp-hide dialog-with-tabs"
    >
      <div className="utf-signin-form-part">
        <ul className="utf-popup-tabs-nav-item">
          <li>
            <a href="#login">Log In</a>
          </li>
          <li>
            <a href="#register">Register</a>
          </li>
        </ul>
        <div className="utf-popup-container-part-tabs">
          {/* Login */}
          <div className="utf-popup-tab-content-item" id="login">
            <div className="utf-welcome-text-item">
              <h3>Welcome Back! Sign in to Continue.</h3>
              <span>
                Don't Have an Account?{" "}
                <a href="#" className="register-tab">
                  Sign Up!
                </a>
              </span>
            </div>
            <form id="login-form" ref={loginRef}>
              <div className="utf-no-border">
                <input
                  type="text"
                  name="emailaddress"
                  className="email"
                  id="emailaddress"
                  placeholder="Email Address"
                  required
                />
                {loginEmailError && (
                  <div className="formError">{loginEmailError}</div>
                )}
              </div>
              <div className="utf-no-border">
                <input
                  type="password"
                  name="password"
                  className="password"
                  id="password"
                  placeholder="Password"
                  required
                />
                {loginPasswordError && (
                  <div className="formError">{loginPasswordError}</div>
                )}
              </div>
              <div className="checkbox margin-top-0">
                <input type="checkbox" className="remember" id="two-step" />
                <label htmlFor="two-step">
                  <span className="checkbox-icon" /> Remember Me
                </label>
              </div>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </form>
            <button
              ref={signingRef}
              className="button full-width utf-button-sliding-icon ripple-effect"
              type="submit"
              form="login-form"
            >
              Log In <i className="icon-feather-chevrons-right" />
            </button>
            <div className="utf-social-login-separator-item">
              <span>or</span>
            </div>
            <div className="utf-social-login-buttons-block " ref={buttonref}>
              <button className="facebook-login ripple-effect">
                <i className="icon-brand-facebook-f" /> Facebook
              </button>
              <button className="google-login ripple-effect">
                <i className="icon-brand-google-plus-g" /> Google+
              </button>
              <button className="twitter-login ripple-effect">
                <i className="icon-brand-twitter" /> Twitter
              </button>
            </div>
          </div>
          {/* Register */}
          <div className="utf-popup-tab-content-item" id="register">
            <div className="utf-welcome-text-item">
              <h3>Create your Account!</h3>
              <span>
                Do You Have an Account?{" "}
                <a href="#" className="login-tab">
                  Log in!
                </a>
              </span>
            </div>
            <form id="utf-register-account-form" ref={emailRef}>
              {/* <div className="utf-no-border margin-bottom-20">
              <select className="utf-chosen-select-single-item utf-with-border" title="Choose plan">
                <option>Private</option>
                <option>Business</option>
                <option>Platinum</option>				
              </select>
            </div> */}
              <div className="utf-no-border">
                <input
                  type="text"
                  name="secondname"
                  className="firstName"
                  id="name"
                  placeholder="First Name"
                  required
                />
                {firstNameError && (
                  <div className="formError">{firstNameError}</div>
                )}
              </div>
              <div className="utf-no-border">
                <input
                  type="text"
                  name="name"
                  className="secondName"
                  id="secondName"
                  placeholder="Second Name"
                  required
                />
                {secondNameError && (
                  <div className="formError">{secondNameError}</div>
                )}
              </div>
              <div className="utf-no-border">
                <input
                  type="text"
                  name="emailaddress-register"
                  className="email"
                  id="emailaddress-register"
                  placeholder="Email Address"
                  required
                />
                {emailError && <div className="formError">{emailError}</div>}
              </div>
              <div className="utf-no-border">
                <input
                  type="password"
                  name="password-register"
                  className="password"
                  id="password-register"
                  placeholder="Password"
                  required
                />
                {passwordError && (
                  <div className="formError">{passwordError}</div>
                )}
              </div>
              <div className="utf-no-border">
                <input
                  type="password"
                  name="password-repeat-register"
                  className="confirmpassword"
                  id="password-repeat-register"
                  placeholder="Repeat Password"
                  required
                />
                {confirmPasswordError && (
                  <div className="formError">{confirmPasswordError}</div>
                )}
              </div>
              <div className="checkbox margin-top-0">
                <input type="checkbox" id="two-step0" className="agree" />
                <label htmlFor="two-step0">
                  <span className="checkbox-icon" /> By Registering You Confirm
                  That You Accept <a href="#">Terms &amp; Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </label>
                {agreeError && <div className="formError">{agreeError}</div>}
              </div>
            </form>
            <button
              ref={registerRef}
              className="margin-top-10 button full-width utf-button-sliding-icon ripple-effect"
              type="submit"
              form="utf-register-account-form"
            >
              Register <i className="icon-feather-chevrons-right" />
            </button>
            <div className="utf-social-login-separator-item">
              <span>or</span>
            </div>
            <div className="utf-social-login-buttons-block " ref={buttonref}>
              <button className="facebook-login ripple-effect">
                <i className="icon-brand-facebook-f" /> Facebook
              </button>
              <button className="google-login ripple-effect">
                <i className="icon-brand-google-plus-g" /> Google+
              </button>
              <button className="twitter-login ripple-effect">
                <i className="icon-brand-twitter" /> Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignInUpModal;
