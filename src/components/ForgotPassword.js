import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "./Layout";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading]);

  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      //alert("Password reset link sent!");
      toast.success(
        <span className="alertText">
          Password reset link sent! <br />
          Check your email
        </span>,
        {
          position: "top-center",
          autoClose: 15000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      //window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert(err.message);
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
                  <h2>Forgot Password</h2>
                  {/* Breadcrumbs */}
                  <nav id="breadcrumbs">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>Forgot Password</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="my-account">
                <div className="tabs-container">
                  {/* Login */}
                  <div className="utf-welcome-text-item">
                    <h3>Forgot Your Password?</h3>
                    <span>
                      Enter your email address below and we'll send you email
                      with password
                    </span>
                  </div>
                  <div className="form-row form-row-wide">
                    <input
                      type="text"
                      className="input-text"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="button full-width border margin-top-10"
                    name="Send Recovery Email"
                    defaultValue="Send Recovery Email"
                    onClick={() => sendPasswordResetEmail(email)}
                  >
                    Submit
                  </button>
                  <div className="forget-text margin-top-15">
                    <span>
                      Forget It, <a href="/login">Send me Back</a> to The Sign
                      In.
                    </span>
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

export default ForgotPassword;
