import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Layout from "./Layout";
import firebase from "firebase";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

function ChangePassword() {
  const { user } = useAuth();
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "/";
    }
  });
  let signOutRef = useRef(null);

  signOutRef = (element) => {
    if (element && user) {
      element.onclick = () => {
        auth.signOut().then((res) => {
          window.location.href = "/";
        });
      };
    }
  };
  const [oldPassword, setOldPassword] = useState(null);
  const [oldPasswordError, setOldPasswordError] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  let resetPasswordRef = useRef(null);
  let emailRef = useRef(null);

  const checkPassword = (data) => {
    var expr =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (expr.test(data)) {
      //console.log("Correct, try another...");
      return true;
    } else {
      //console.log("Wrong...!");
      return false;
    }
  };

  resetPasswordRef = (element) => {
    if (element) {
      element.onclick = async (e) => {
        e.preventDefault();
        if (!oldPassword?.trim()) {
          setOldPasswordError("Old password is required");
          return;
        }
        if (!password?.trim()) {
          setPasswordError("Password is required");
          return;
        }
        if (!confirmPassword?.trim()) {
          setConfirmPasswordError("Password confirmation is required");
          return;
        }
        if (!checkPassword(password)) {
          setPasswordError(
            "Allowed Password: [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]"
          );
          return;
        }
        if (password !== confirmPassword) {
          setConfirmPasswordError("passwords do not match");
          return;
        }
        if (password && confirmPassword && password === confirmPassword) {
          try {
            const u = firebase.auth().currentUser;
            const credential = firebase.auth.EmailAuthProvider.credential(
              u.email,
              oldPassword
            );
            var uuser = firebase
              .auth()
              .currentUser.reauthenticateWithCredential(credential)
              .then(() => {
                u.updatePassword(password)
                  .then(() => {
                    //console.log("Password updated!");
                    toast.success(
                      <span className="alertText">Password updated!</span>,
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
                    window.location.href = "/";
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                //console.log("Error Message: ", error.message);
                if (error.code === "auth/wrong-password") {
                  toast.warn(
                    <span className="alertText">
                      Wrong old password. Please enter the correct one and try
                      again!
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
                } else {
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
  emailRef = (element) => {
    if (element) {
      element.querySelector(".oldpassword").onchange = (e) => {
        setOldPassword(e.target.value);
        setOldPasswordError(null);
      };
      element.querySelector(".password").onchange = (e) => {
        setPassword(e.target.value);
        setPasswordError(null);
      };
      element.querySelector(".confirmpassword").onchange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(null);
      };
    }
  };

  return (
    <Layout>
      <div>
        <div
          className="parallax titlebar"
          data-background="images/listings-parallax.jpg"
          data-color="rgba(48, 48, 48, 1)"
          data-color-opacity="0.8"
          data-img-width={800}
          data-img-height={505}
        >
          <div id="titlebar">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Change Password</h2>
                  {/* Breadcrumbs */}
                  <nav id="breadcrumbs">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>Change Password</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="container">
          <div className="row">
            {/* Widget */}
            <div className="col-md-3">
              <div className="margin-bottom-20">
                <div className="utf-edit-profile-photo-area">
                  {" "}
                  <img src="images/agent-02.jpg" alt="" />
                  <div className="utf-change-photo-btn-item">
                    <div className="utf-user-photo-upload">
                      {" "}
                      <span>
                        <i className="fa fa-upload" /> Upload Photo
                      </span>
                      <input
                        type="file"
                        className="upload tooltip top"
                        title="Upload Photo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="sidebar margin-top-20">
                <div className="user-smt-account-menu-container">
                  <ul className="user-account-nav-menu">
                    <li>
                      <a href="/my-profile">
                        <i className="sl sl-icon-user" /> My Profile
                      </a>
                    </li>
                    <li>
                      <a href="/my-properties">
                        <i className="sl sl-icon-docs" /> My Property
                      </a>
                    </li>
                    <li>
                      <a href="/add-new-property">
                        <i className="sl sl-icon-action-redo" /> New Property
                      </a>
                    </li>
                    <li>
                      <a href="/change-password" className="current">
                        <i className="sl sl-icon-lock" /> Change Password
                      </a>
                    </li>
                    <li>
                      <a ref={signOutRef}>
                        <i className="sl sl-icon-power" /> Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget utf-sidebar-widget-item">
                <div className="utf-detail-banner-add-section">
                  <a href="#">
                    <img src="images/banner-add-2.jpg" alt="banner-add-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="utf-user-profile-item">
                <div className="utf-submit-page-inner-box">
                  <h3>Change Password</h3>
                  <form id="utf-register-account-form" ref={emailRef}>
                    <div className="content with-padding">
                      <div className="col-md-4">
                        <label>Current Password</label>
                        <input
                          type="password"
                          className="oldpassword"
                          placeholder="*********"
                          required
                        />
                        {oldPasswordError && (
                          <div className="formError">{oldPasswordError}</div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <label>New Password</label>
                        <input
                          type="password"
                          className="password"
                          placeholder="*********"
                          required
                        />
                        {passwordError && (
                          <div className="formError">{passwordError}</div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <label>Confirm New Password</label>
                        <input
                          type="password"
                          className="confirmpassword"
                          placeholder="*********"
                          required
                        />
                        {confirmPasswordError && (
                          <div className="formError">
                            {confirmPasswordError}
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a
                      ref={resetPasswordRef}
                      className="utf-centered-button button"
                    >
                      Save Changes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="margin-top-65"></div>
      </div>
    </Layout>
  );
}

export default ChangePassword;
