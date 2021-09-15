import React, { useState, useRef, useEffect } from "react";
import Layout from "./Layout";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import firebase from "firebase";
import { storage } from "../firebase";
const db = firebase.firestore();

function MyProfile() {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "/";
    }
  });
  const { user } = useAuth();
  const [profileFile, setProfileFile] = useState(null);
  const [profileUrl, setProfileURL] = useState("images/agent-02.jpg");
  const [profileUpload, setProfileUpload] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  let handleProfileChange = useRef(null);
  let handleProfileUpload = useRef(null);
  let updateProfileRef = useRef(null);
  let profileRef = useRef(null);

  const dbCollection = db.collection("users");

  const [profileName, setProfileName] = useState("John Williams");
  const [profileNameError, setProfileNameError] = useState(null);
  const [profileTitle, setProfileTitle] = useState("Agent In Afghanistan");
  const [profileTitleError, setProfileTitleError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("(+21) 124 123 4546");
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [emailAddress, setEmailAddress] = useState("info@example.com");
  const [emailAddressError, setEmailAddressError] = useState(null);
  const [about, setAbout] = useState(null);
  const [aboutError, setAboutError] = useState(null);
  const [facebook, setFacebook] = useState("https://www.facebook.com");
  const [facebookError, setFacebookError] = useState(null);
  const [twitter, setTwitter] = useState("https://www.twitter.com");
  const [twitterError, setTwitterError] = useState(null);
  const [linkedIn, setLinkedIn] = useState("https://www.linkedin.com");
  const [linkedInError, setLinkedInError] = useState(null);
  const [googlePlus, setGooglePlus] = useState("https://www.google.com");
  const [googlePlusError, setGooglePlusError] = useState(null);
  const [pinterest, setPinterest] = useState("https://www.pinterest.com");
  const [pinterestError, setPinterestError] = useState(null);
  const [instagram, setInstagram] = useState("https://www.instagram.com");
  const [instagramError, setInstagramError] = useState(null);

  useEffect(async () => {
    if (user && !profileUpload) {
      var imageRef = null;
      await dbCollection
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            //console.log("Document data:", doc.data());
            imageRef = doc.data().profileImage;
            setProfileName(doc.data().profileName);
            setProfileTitle(doc.data().profileTitle);
            setPhoneNumber(doc.data().phoneNumber);
            setEmailAddress(doc.data().emailAddress);
            setAbout(doc.data().about);
            setFacebook(doc.data().facebook);
            setTwitter(doc.data().twitter);
            setLinkedIn(doc.data().linkedIn);
            setGooglePlus(doc.data().googlePlus);
            setPinterest(doc.data().pinterest);
            setInstagram(doc.data().instagram);
          }
        });
      //console.log("ImageRef:", imageRef);
      if (imageRef != null) {
        storage
          .ref(imageRef)
          .getDownloadURL()
          .then(
            (url) => {
              setProfileURL(url);
            },
            (error) => {
              console.log(error);
            }
          );
      }
    }
  });

  handleProfileChange = (e) => {
    setProfileFile(e.target.files[0]);
    setProfileURL(URL.createObjectURL(e.target.files[0]));
    setProfileUpload(true);
  };

  handleProfileUpload = async (e) => {
    e.preventDefault();
    const ref = storage.ref(`/${user.uid}/profileImage/${profileFile.name}`);
    const promises = [];
    const uploadTask = ref.put(profileFile);
    promises.push(uploadTask);
    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(progress);
      },
      console.error,
      () => {
        ref.getDownloadURL().then(async (url) => {
          setProfileFile(null);
          setProfileURL(url);
          await dbCollection
            .doc(user.uid)
            .update({
              profileImage: `/${user.uid}/profileImage/${profileFile.name}`,
            })
            .then(function () {
              setProfileUpload(false);
              setUploadProgress(0);
              //console.log("Image successfully written!");
            })
            .catch(function (error) {
              setProfileUpload(false);
              setUploadProgress(0);
              //console.error("Error writing image: ", error);
            });
        });
      }
    );
    await Promise.all(promises);
  };

  updateProfileRef = (element) => {
    if (element) {
      element.profileName.onchange = (e) => {
        setProfileName(e.target.value);
        setProfileNameError(null);
      };
      element.profileTitle.onchange = (e) => {
        setProfileTitle(e.target.value);
        setProfileTitleError(null);
      };
      element.phoneNumber.onchange = (e) => {
        setPhoneNumber(e.target.value);
        setPhoneNumberError(null);
      };
      element.emailAddress.onchange = (e) => {
        setEmailAddress(e.target.value);
        setEmailAddressError(null);
      };
      element.about.onchange = (e) => {
        setAbout(e.target.value);
        setAboutError(null);
      };
      element.facebook.onchange = (e) => {
        setFacebook(e.target.value);
        setFacebookError(null);
      };
      element.twitter.onchange = (e) => {
        setTwitter(e.target.value);
        setTwitterError(null);
      };
      element.linkedIn.onchange = (e) => {
        setLinkedIn(e.target.value);
        setLinkedInError(null);
      };
      element.googlePlus.onchange = (e) => {
        setGooglePlus(e.target.value);
        setGooglePlusError(null);
      };
      element.pinterest.onchange = (e) => {
        setPinterest(e.target.value);
        setPinterestError(null);
      };
      element.instagram.onchange = (e) => {
        setInstagram(e.target.value);
        setInstagramError(null);
      };
    }
  };

  profileRef = (element) => {
    if (element) {
      element.onclick = async (e) => {
        e.preventDefault();
        if (!profileName?.trim()) {
          setProfileNameError("Name is required");
          return;
        }
        if (!profileTitle?.trim()) {
          setProfileTitleError("Title is required");
          return;
        }
        if (!phoneNumber?.trim()) {
          setPhoneNumberError("Phone Number is required");
          return;
        }
        if (!emailAddress?.trim()) {
          setEmailAddressError("Email Address is required");
          return;
        }
        if (!about?.trim()) {
          setAboutError("About is required");
          return;
        }
        try {
          if (user) {
            console.log("Saving Profile");
            await dbCollection
              .doc(user.uid)
              .update({
                profileName: profileName,
                profileTitle: profileTitle,
                phoneNumber: phoneNumber,
                emailAddress: emailAddress,
                about: about,
                facebook: facebook,
                twitter: twitter,
                linkedIn: linkedIn,
                googlePlus: googlePlus,
                pinterest: pinterest,
                instagram: instagram,
              })
              .then(() => {
                toast.success(
                  <span className="alertText">Profile saved!</span>,
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
                window.location.href = "/my-profile";
              });
          }
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
                  <h2>My Profile</h2>
                  {/* Breadcrumbs */}
                  <nav id="breadcrumbs">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>My Profile</li>
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
            <div className="col-md-3">
              {user && (
                <div>
                  <div className="margin-bottom-20">
                    <div className="utf-edit-profile-photo-area">
                      {" "}
                      <img src={profileUrl} alt="" />
                      <div className="utf-change-photo-btn-item">
                        <div className="utf-user-photo-upload">
                          <form onSubmit={handleProfileUpload}>
                            {" "}
                            {!profileUpload && (
                              <div>
                                <span>
                                  <i className="fa fa-upload" /> Upload Photo
                                </span>
                                <input
                                  type="file"
                                  className="upload tooltip top"
                                  title="Upload Photo"
                                  onChange={handleProfileChange}
                                />
                              </div>
                            )}
                            {profileUpload && (
                              <button
                                disabled={!profileFile}
                                style={{
                                  background: "none",
                                  color: "inherit",
                                  border: "none",
                                  padding: 0,
                                  font: "inherit",
                                  cursor: "pointer",
                                  outline: "inherit",
                                }}
                              >
                                Save
                              </button>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                    <progress
                      value={uploadProgress}
                      max="100"
                      style={{ width: `${uploadProgress}%` }}
                    />
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
                          <a href="/add-new-property" className="current">
                            <i className="sl sl-icon-action-redo" /> New
                            Property
                          </a>
                        </li>
                        <li>
                          <a href="/change-password">
                            <i className="sl sl-icon-lock" /> Change Password
                          </a>
                        </li>
                        <li>
                          <a href="#">
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
              )}
            </div>
            <div className="col-md-9">
              <div className="utf-user-profile-item">
                <form id="add-property-form" ref={updateProfileRef}>
                  <div className="utf-submit-page-inner-box">
                    <h3>Private Account</h3>
                    <div className="content with-padding">
                      <div className="col-md-6">
                        <label>Your Name</label>
                        <input
                          placeholder={profileName}
                          type="text"
                          name="profileName"
                          id="profileName"
                        />
                        {profileNameError && (
                          <div className="formError">{profileNameError}</div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <label>Your Title</label>
                        <input
                          placeholder={profileTitle}
                          type="text"
                          name="profileTitle"
                          id="profileTitle"
                        />
                        {profileTitleError && (
                          <div className="formError">{profileTitleError}</div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <label>Phone Number</label>
                        <input
                          placeholder={phoneNumber}
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                        />
                        {phoneNumberError && (
                          <div className="formError">{phoneNumberError}</div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <label>Email Address</label>
                        <input
                          placeholder={emailAddress}
                          type="text"
                          name="emailAddress"
                          id="emailAddress"
                        />
                        {emailAddressError && (
                          <div className="formError">{emailAddressError}</div>
                        )}
                      </div>
                      <div className="col-md-12 margin-bottom-0">
                        <label>About</label>
                        <textarea
                          name="about"
                          id="about"
                          cols={20}
                          rows={5}
                          placeholder={about}
                        />
                        {aboutError && (
                          <div className="formError">{aboutError}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="utf-submit-page-inner-box">
                    <h3>Social Accounts</h3>
                    <div className="content with-padding">
                      <div className="col-md-6">
                        <label>
                          <i className="icon-brand-facebook" /> Facebook
                        </label>
                        <input
                          type="text"
                          name="facebook"
                          id="facebook"
                          placeholder={facebook}
                        />
                      </div>
                      <div className="col-md-6">
                        <label>
                          <i className="icon-brand-twitter" /> Twitter
                        </label>
                        <input
                          type="text"
                          name="twitter"
                          id="twitter"
                          placeholder={twitter}
                        />
                      </div>
                      <div className="col-md-6">
                        <label>
                          <i className="icon-brand-linkedin" /> Linkedin
                        </label>
                        <input
                          type="text"
                          name="linkedIn"
                          id="linkedIn"
                          placeholder={linkedIn}
                        />
                      </div>
                      <div className="col-md-6">
                        <label>
                          <i className="icon-brand-google-plus-g" /> Google+
                        </label>
                        <input
                          type="text"
                          name="googlePlus"
                          id="googlePlus"
                          placeholder={googlePlus}
                        />
                      </div>
                      <div className="col-md-6">
                        <label>
                          <i className="icon-brand-pinterest" /> Pinterest
                        </label>
                        <input
                          type="text"
                          name="pinterest"
                          id="pinterest"
                          placeholder={pinterest}
                        />
                      </div>
                      <div className="col-md-6">
                        <label>
                          <i className="icon-feather-instagram" /> Instagram
                        </label>
                        <input
                          type="text"
                          name="instagram"
                          id="instagram"
                          placeholder={instagram}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        className="utf-centered-button button margin-top-0 margin-bottom-20"
                        ref={profileRef}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="margin-top-65"></div>
    </Layout>
  );
}

export default MyProfile;
