import React, { useState, useRef, useEffect } from "react";
import Layout from "./Layout";
import { useAuth } from "../context/AuthContext";
import SignInUpModal from "./SignInUpModal";
import { toast } from "react-toastify";
import firebase from "firebase";
import { storage } from "../firebase";
import FileUpload from "./file-upload/file-upload.component";
const db = firebase.firestore();

function AddNewProperty() {
  const NINE = 12345;
  const { user } = useAuth();
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "/";
    }
  });
  const [profileFile, setProfileFile] = useState(null);
  const [profileUrl, setProfileURL] = useState("images/agent-02.jpg");
  const [profileUpload, setProfileUpload] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadProgress2, setUploadProgress2] = useState(0);

  let handleProfileChange = useRef(null);
  let handleProfileUpload = useRef(null);

  const dbCollection = db.collection("users");

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

  const [newPropertyImages, setNewPropertyImages] = useState({
    propertyImages: [],
  });

  const updateUploadedFiles = (files) =>
    setNewPropertyImages({ ...newPropertyImages, propertyImages: files });

  const [propertyTitle, setPropertyTitle] = useState(null);
  const [propertyTitleError, setPropertyTitleError] = useState(null);
  const [propertyStatus, setPropertyStatus] = useState(null);
  const [propertyStatusError, setPropertyStatusError] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [propertyTypeError, setPropertyTypeError] = useState(null);
  const [propertyPrice, setPropertyPrice] = useState(null);
  const [propertyPriceError, setPropertyPriceError] = useState(null);
  const [propertyArea, setPropertyArea] = useState(null);
  const [propertyAreaError, setPropertyAreaError] = useState(null);
  const [propertyRooms, setPropertyRooms] = useState(null);
  const [propertyRoomsError, setPropertyRoomsError] = useState(null);
  const [propertyAddress, setPropertyAddress] = useState(null);
  const [propertyAddressError, setPropertyAddressError] = useState(null);
  const [propertyCityName, setPropertyCityName] = useState(null);
  const [propertyCityNameError, setPropertyCityNameError] = useState(null);
  const [propertyState, setPropertyState] = useState(null);
  const [propertyStateError, setPropertyStateError] = useState(null);
  const [propertyZipCode, setPropertyZipCode] = useState(null);
  const [propertyZipCodeError, setPropertyZipCodeError] = useState(null);
  const [propertyDescription, setPropertyDescription] = useState(null);
  const [propertyDescriptionError, setPropertyDescriptionError] =
    useState(null);
  const [propertyAge, setPropertyAge] = useState(null);
  const [propertyAgeError, setPropertyAgeError] = useState(null);
  const [propertyBedRooms, setPropertyBedRooms] = useState(null);
  const [propertyBedRoomsError, setPropertyBedRoomsError] = useState(null);
  const [propertyBathRooms, setPropertyBathRooms] = useState(null);
  const [propertyBathRoomsError, setPropertyBathRoomsError] = useState(null);
  const [propertyGarage, setPropertyGarage] = useState(null);
  const [propertyGarageError, setPropertyGarageError] = useState(null);
  const [propertyGarageSize, setPropertyGarageSize] = useState(null);
  const [propertyGarageSizeError, setPropertyGarageSizeError] = useState(null);
  const [airCondition, setAirCondition] = useState(false);
  const [swimmingPool, setSwimmingPool] = useState(false);
  const [centralHeating, setCentralHeating] = useState(false);
  const [laundryRoom, setLaundryRoom] = useState(false);
  const [gym, setGym] = useState(false);
  const [alarm, setAlarm] = useState(false);
  const [windowCovering, setWindowCovering] = useState(false);
  const [noFeature, setNoFeature] = useState(false);
  const [propertyContactFullName, setPropertyContactFullName] = useState(null);
  const [propertyContactFullNameError, setPropertyContactFullNameError] =
    useState(null);
  const [propertyContactEmailAddress, setPropertyContactEmailAddress] =
    useState(null);
  const [
    propertyContactEmailAddressError,
    setPropertyContactEmailAddressError,
  ] = useState(null);
  const [propertyContactPhoneNumber, setPropertyContactPhoneNumber] =
    useState(null);
  const [propertyContactPhoneNumberError, setPropertyContactPhoneNumberError] =
    useState(null);

  let newPropertyRef = useRef(null);
  let propertyRef = useRef(null);

  newPropertyRef = (element) => {
    if (element) {
      element.propertyTitle.onchange = (e) => {
        setPropertyTitle(e.target.value);
        setPropertyTitleError(null);
      };
      element.propertyStatus.onchange = (e) => {
        setPropertyStatus(e.target.value);
        setPropertyStatusError(null);
      };
      element.propertyType.onchange = (e) => {
        setPropertyType(e.target.value);
        setPropertyTypeError(null);
      };
      element.propertyPrice.onchange = (e) => {
        setPropertyPrice(e.target.value);
        setPropertyPriceError(null);
      };
      element.propertyArea.onchange = (e) => {
        setPropertyArea(e.target.value);
        setPropertyAreaError(null);
      };
      element.propertyRooms.onchange = (e) => {
        setPropertyRooms(e.target.value);
        setPropertyRoomsError(null);
      };
      element.propertyAddress.onchange = (e) => {
        setPropertyAddress(e.target.value);
        setPropertyAddressError(null);
      };
      element.propertyCityName.onchange = (e) => {
        setPropertyCityName(e.target.value);
        setPropertyCityNameError(null);
      };
      element.propertyState.onchange = (e) => {
        setPropertyState(e.target.value);
        setPropertyStateError(null);
      };
      element.propertyZipCode.onchange = (e) => {
        setPropertyZipCode(e.target.value);
        setPropertyZipCodeError(null);
      };
      element.propertyDescription.onchange = (e) => {
        setPropertyDescription(e.target.value);
        setPropertyDescriptionError(null);
      };
      element.propertyAge.onchange = (e) => {
        setPropertyAge(e.target.value);
        setPropertyAgeError(null);
      };
      element.propertyBedRooms.onchange = (e) => {
        setPropertyBedRooms(e.target.value);
        setPropertyBedRoomsError(null);
      };
      element.propertyBathRooms.onchange = (e) => {
        setPropertyBathRooms(e.target.value);
        setPropertyBathRoomsError(null);
      };
      element.propertyGarage.onchange = (e) => {
        setPropertyGarage(e.target.value);
        setPropertyGarageError(null);
      };
      element.propertyGarageSize.onchange = (e) => {
        setPropertyGarageSize(e.target.value);
        setPropertyGarageSizeError(null);
      };
      element.airCondition.onchange = (e) => {
        setAirCondition(e.target.value);
      };
      element.swimmingPool.onchange = (e) => {
        setSwimmingPool(e.target.value);
      };
      element.centralHeating.onchange = (e) => {
        setCentralHeating(e.target.value);
      };
      element.laundryRoom.onchange = (e) => {
        setLaundryRoom(e.target.value);
      };
      element.gym.onchange = (e) => {
        setGym(e.target.value);
      };
      element.alarm.onchange = (e) => {
        setAlarm(e.target.value);
      };
      element.windowCovering.onchange = (e) => {
        setWindowCovering(e.target.value);
      };
      element.noFeature.onchange = (e) => {
        setNoFeature(e.target.value);
      };
      element.propertyContactFullName.onchange = (e) => {
        setPropertyContactFullName(e.target.value);
        setPropertyContactFullNameError(null);
      };
      element.propertyContactEmailAddress.onchange = (e) => {
        setPropertyContactEmailAddress(e.target.value);
        setPropertyContactEmailAddressError(null);
      };
      element.propertyContactPhoneNumber.onchange = (e) => {
        setPropertyContactPhoneNumber(e.target.value);
        setPropertyContactPhoneNumberError(null);
      };
    }
  };

  propertyRef = (element) => {
    if (element) {
      element.onclick = async (e) => {
        e.preventDefault();
        if (!propertyTitle?.trim()) {
          setPropertyTitleError("Title is required");
        }
        if (!propertyStatus?.trim()) {
          setPropertyStatusError("Status is required");
        }
        if (!propertyType?.trim()) {
          setPropertyTypeError("Type is required");
        }
        if (!propertyPrice?.trim()) {
          setPropertyPriceError("Price is required");
        }
        if (!propertyArea?.trim()) {
          setPropertyAreaError("Area is required");
        }
        if (!propertyRooms) {
          setPropertyRoomsError("Rooms are required");
        }
        if (!propertyAddress) {
          setPropertyAddressError("Address is required");
        }
        if (!propertyCityName) {
          setPropertyCityNameError("City is required");
        }
        if (!propertyState) {
          setPropertyStateError("State is required");
        }
        if (!propertyZipCode) {
          setPropertyZipCodeError("Zip-Code is required");
        }
        if (!propertyDescription) {
          setPropertyDescriptionError("Description is required");
        }
        if (!propertyAge) {
          setPropertyAgeError("Age is required");
        }
        if (!propertyBedRooms) {
          setPropertyBedRoomsError("Bed Rooms are required");
        }
        if (!propertyBathRooms) {
          setPropertyBathRoomsError("Bath Rooms are required");
        }
        if (!propertyGarage) {
          setPropertyGarageError("Garage is required");
        }
        if (!propertyGarageSize) {
          setPropertyGarageSizeError("Garage Size is required");
        }
        if (!propertyContactFullName) {
          setPropertyContactFullNameError("Full Name is required");
        }
        if (!propertyContactEmailAddress) {
          setPropertyContactEmailAddressError("Email Address is required");
        }
        if (!propertyContactPhoneNumber) {
          setPropertyContactPhoneNumberError("Phone Number is required");
        }
        // if (
        //   propertyTitle &&
        //   propertyStatus &&
        //   propertyType &&
        //   propertyPrice &&
        //   propertyArea &&
        //   propertyRooms &&
        //   propertyAddress &&
        //   propertyCityName &&
        //   propertyState &&
        //   propertyZipCode &&
        //   propertyDescription &&
        //   propertyAge &&
        //   propertyBedRooms &&
        //   propertyBathRooms &&
        //   propertyOtherFeatures &&
        //   propertyContactFullName &&
        //   propertyContactEmailAddress &&
        //   propertyContactPhoneNumber
        // ) {
        try {
          if (user) {
            console.log("Saving Property");
            console.log(newPropertyImages.propertyImages);
            const images = newPropertyImages.propertyImages;

            if (images.length > 10) {
              toast.error(
                <span className="alertText">
                  Only Ten(10) property images are allowed!
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
              return;
            }

            const promises = [];
            var totalProgress = 0;
            var counter = 1;
            images.map((propertyImage) => {
              const ref = storage.ref(
                `/${user.uid}/properties/${propertyTitle}/image${counter}`
              );
              const uploadTask = ref.put(propertyImage);
              promises.push(uploadTask);
              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 10
                  );
                  totalProgress = totalProgress + progress;
                  setUploadProgress2(totalProgress);
                },
                console.error,
                () => {
                  ref.getDownloadURL().then(async (url) => {
                    console.log("Image url:", url);
                  });
                }
              );
              counter++;
            });
            await Promise.all(promises);
            await dbCollection
              .doc(user.uid)
              .collection("properties")
              .doc(propertyTitle)
              .set(
                {
                  propertyTitle: propertyTitle,
                  propertyStatus: propertyStatus,
                  propertyType: propertyType,
                  propertyPrice: propertyPrice,
                  propertyArea: propertyArea,
                  propertyRooms: propertyRooms,
                  propertyAddress: propertyAddress,
                  propertyCityName: propertyCityName,
                  propertyState: propertyState,
                  propertyZipCode: propertyZipCode,
                  propertyDescription: propertyDescription,
                  propertyAge: propertyAge,
                  propertyBedRooms: propertyBedRooms,
                  propertyBathRooms: propertyBathRooms,
                  propertyGarage: propertyGarage,
                  propertyGarageSize: propertyGarageSize,
                  propertyOtherFeatures: {
                    airCondition: airCondition,
                    swimmingPool: swimmingPool,
                    centralHeating: centralHeating,
                    laundryRoom: laundryRoom,
                    gym: gym,
                    alarm: alarm,
                    windowCovering: windowCovering,
                    noFeature: noFeature,
                  },
                  propertyContactFullName: propertyContactFullName,
                  propertyContactEmailAddress: propertyContactEmailAddress,
                  propertyContactPhoneNumber: propertyContactPhoneNumber,
                  imageCount: counter - 1,
                },
                { merge: true }
              )
              .then(() => {
                toast.success(
                  <span className="alertText">Property added!</span>,
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
                window.location.href = "/add-new-property";
              });
            setUploadProgress2(0);
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
        //}
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
                  <h2>Add New Property</h2>
                  {/* Breadcrumbs */}
                  <nav id="breadcrumbs">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>Add New Property</li>
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
            {/* Submit Page */}
            <div className="col-md-9">
              <div className="submit-page">
                {/* Section */}
                <form id="add-property-form" ref={newPropertyRef}>
                  <div className="utf-submit-page-inner-box">
                    <h3>Property Basic Information</h3>
                    <div className="content with-padding">
                      <div className="col-md-12">
                        <h5>Property Title</h5>
                        <input
                          className="search-field"
                          placeholder="Property Title"
                          type="text"
                          name="propertyTitle"
                          id="propertyTitle"
                          required
                        />
                        {propertyTitleError && (
                          <div className="formError">{propertyTitleError}</div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <h5>Status</h5>
                        <select
                          className="utf-chosen-select-single-item"
                          name="propertyStatus"
                          id="propertyStatus"
                        >
                          <option label="blank" />
                          <option>For Sale</option>
                          <option>For Rent</option>
                        </select>
                        {propertyStatusError && (
                          <div className="formError">{propertyStatusError}</div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <h5>Type</h5>
                        <select
                          className="utf-chosen-select-single-item"
                          name="propertyType"
                          id="propertyType"
                        >
                          <option label="blank" />
                          <option>Apartment</option>
                          <option>House</option>
                          <option>Commercial</option>
                          <option>Garage</option>
                          <option>Lot</option>
                        </select>
                        {propertyTypeError && (
                          <div className="formError">{propertyTypeError}</div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <h5>Price</h5>
                        <div className="select-input disabled-first-option">
                          <input
                            type="text"
                            placeholder={NINE}
                            data-unit="USD"
                            name="propertyPrice"
                            id="propertyPrice"
                          />
                          {propertyPriceError && (
                            <div className="formError">
                              {propertyPriceError}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <h5>Area</h5>
                        <div className="select-input disabled-first-option">
                          <input
                            type="text"
                            placeholder={NINE}
                            data-unit="Sq Ft"
                            name="propertyArea"
                            id="propertyArea"
                          />
                          {propertyAreaError && (
                            <div className="formError">{propertyAreaError}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <h5>Rooms</h5>
                        <select
                          className="utf-chosen-select-single-item"
                          name="propertyRooms"
                          id="propertyRooms"
                        >
                          <option label="blank" />
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>More than 5</option>
                        </select>
                        {propertyRoomsError && (
                          <div className="formError">{propertyRoomsError}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Section / End */}
                  {/* Section */}
                  <div className="utf-submit-page-inner-box">
                    <h3>Property Gallery</h3>
                    <div className="content with-padding">
                      <div className="col-md-12 submit-section">
                        {/* <form action="file-upload" className="dropzone" /> */}
                        <FileUpload
                          accept=".jpg,.png,.jpeg"
                          label="Property Image(s)"
                          multiple
                          updateFilesCb={updateUploadedFiles}
                        />
                        {/* <button
                            className="utf-centered-button button"
                            style={{ width: "30%" }}
                            type="submit"
                          >
                            {" "}
                            Upload Images{" "}
                          </button> */}
                      </div>
                    </div>
                  </div>
                  {/* Section / End */}
                  {/* Section */}
                  <div className="utf-submit-page-inner-box">
                    <h3>Property Location</h3>
                    <div className="content with-padding">
                      <div className="col-md-6">
                        <h5>Address</h5>
                        <input
                          type="text"
                          placeholder="Address"
                          name="propertyAddress"
                          id="propertyAddress"
                        />
                        {propertyAddressError && (
                          <div className="formError">
                            {propertyAddressError}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <h5>City Name</h5>
                        <input
                          type="text"
                          placeholder="City Name"
                          name="propertyCityName"
                          id="propertyCityName"
                        />
                        {propertyCityNameError && (
                          <div className="formError">
                            {propertyCityNameError}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <h5>State</h5>
                        <input
                          type="text"
                          placeholder="State"
                          name="propertyState"
                          id="propertyState"
                        />
                        {propertyStateError && (
                          <div className="formError">{propertyStateError}</div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <h5>Zip-Code</h5>
                        <input
                          type="text"
                          placeholder={NINE}
                          name="propertyZipCode"
                          id="propertyZipCode"
                        />
                        {propertyZipCodeError && (
                          <div className="formError">
                            {propertyZipCodeError}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Section / End */}
                  {/* Section */}
                  <div className="utf-submit-page-inner-box">
                    <h3>Property Information</h3>
                    <div className="content with-padding">
                      <div className="col-md-12">
                        <h5>Property Description</h5>
                        <textarea
                          name="propertyDescription"
                          cols={20}
                          rows={2}
                          id="propertyDescription"
                        />
                        {propertyDescriptionError && (
                          <div className="formError">
                            {propertyDescriptionError}
                          </div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <h5>Building Age</h5>
                        <select
                          className="utf-chosen-select-single-item"
                          name="propertyAge"
                          id="propertyAge"
                        >
                          <option label="blank" />
                          <option>0 - 1 Years</option>
                          <option>0 - 5 Years</option>
                          <option>0 - 10 Years</option>
                          <option>0 - 20 Years</option>
                          <option>0 - 50 Years</option>
                          <option>50 + Years</option>
                        </select>
                        {propertyAgeError && (
                          <div className="formError">{propertyAgeError}</div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <h5>Bed Rooms</h5>
                        <select
                          className="utf-chosen-select-single-item"
                          name="propertyBedRooms"
                          id="propertyBedRooms"
                        >
                          <option label="blank" />
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        {propertyBedRoomsError && (
                          <div className="formError">
                            {propertyBedRoomsError}
                          </div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <h5>Bath Rooms</h5>
                        <select
                          className="utf-chosen-select-single-item"
                          name="propertyBathRooms"
                          id="propertyBathRooms"
                        >
                          <option label="blank" />
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        {propertyBathRoomsError && (
                          <div className="formError">
                            {propertyBathRoomsError}
                          </div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <h5>Garage</h5>
                        <select
                          className="utf-chosen-select-single-item"
                          name="propertyGarage"
                          id="propertyGarage"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        {propertyGarageError && (
                          <div className="formError">{propertyGarageError}</div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <h5>Garage Size</h5>
                        <div className="select-input disabled-first-option">
                          <input
                            type="text"
                            placeholder={NINE}
                            data-unit="Sq Ft"
                            name="propertyGarageSize"
                            id="propertyGarageSize"
                          />
                          {propertyGarageSizeError && (
                            <div className="formError">
                              {propertyGarageSizeError}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <h5 className="margin-top-15">
                          Other Features <span />
                        </h5>
                        <div className="checkboxes in-row margin-bottom-20">
                          <input
                            id="airCondition"
                            type="checkbox"
                            name="airCondition"
                          />
                          <label htmlFor="airCondition">Air Conditioning</label>
                          <input
                            id="swimmingPool"
                            type="checkbox"
                            name="swimmingPool"
                          />
                          <label htmlFor="swimmingPool">Swimming Pool</label>
                          <input
                            id="centralHeating"
                            type="checkbox"
                            name="centralHeating"
                          />
                          <label htmlFor="centralHeating">
                            Central Heating
                          </label>
                          <input
                            id="laundryRoom"
                            type="checkbox"
                            name="laundryRoom"
                          />
                          <label htmlFor="laundryRoom">Laundry Room</label>
                          <input id="gym" type="checkbox" name="gym" />
                          <label htmlFor="gym">Gym</label>
                          <input id="alarm" type="checkbox" name="alarm" />
                          <label htmlFor="alarm">Alarm</label>
                          <input
                            id="windowCovering"
                            type="checkbox"
                            name="windowCovering"
                          />
                          <label htmlFor="windowCovering">
                            Window Covering
                          </label>
                          <input
                            id="noFeature"
                            type="checkbox"
                            name="noFeature"
                          />
                          <label htmlFor="noFeature">None</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Section / End */}
                  {/* Section */}
                  <div className="utf-submit-page-inner-box">
                    <h3>Property Contact Details</h3>
                    <div className="content with-padding">
                      <div className="col-md-4">
                        <h5>Full Name</h5>
                        <input
                          type="text"
                          placeholder="Name"
                          name="propertyContactFullName"
                          id="propertyContactFullName"
                        />
                        {propertyContactFullNameError && (
                          <div className="formError">
                            {propertyContactFullNameError}
                          </div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <h5>Email Address</h5>
                        <input
                          type="text"
                          placeholder="Email Address"
                          name="propertyContactEmailAddress"
                          id="propertyContactEmailAddress"
                        />
                        {propertyContactEmailAddressError && (
                          <div className="formError">
                            {propertyContactEmailAddressError}
                          </div>
                        )}
                      </div>
                      <div className="col-md-4">
                        <h5>Phone Number</h5>
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="propertyContactPhoneNumber"
                          id="propertyContactPhoneNumber"
                        />
                        {propertyContactPhoneNumberError && (
                          <div className="formError">
                            {propertyContactPhoneNumberError}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      {user && (
                        <div>
                          <button
                            className="utf-centered-button button"
                            type="submit"
                            form="add-property-form"
                            ref={propertyRef}
                          >
                            Submit Property
                          </button>
                          <progress
                            value={uploadProgress2}
                            max="100"
                            style={{ width: `${uploadProgress2}%` }}
                          />
                        </div>
                      )}
                      {!user && (
                        <a
                          href="#utf-signin-dialog-block"
                          class="popup-with-zoom-anim utf-centered-button button"
                        >
                          <span>Sign In & Add Property</span>
                        </a>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="margin-top-65"></div>
      </div>
      {/* modal */}
      <SignInUpModal />
    </Layout>
  );
}

export default AddNewProperty;
