import React from "react";
import Layout from "./Layout";
import firebase from "firebase";

function MyProperties() {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "/";
    }
  });
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
                  <h2>My Property</h2>
                  {/* Breadcrumbs */}
                  <nav id="breadcrumbs">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>My Property</li>
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
                    {/*  <li><a href="my-bookmarks.html"><i class="sl sl-icon-star"></i> Bookmark Listing</a></li> */}
                    <li>
                      <a href="/my-properties" className="current">
                        <i className="sl sl-icon-docs" /> My Property
                      </a>
                    </li>
                    <li>
                      <a href="/add-new-property">
                        <i className="sl sl-icon-action-redo" /> New Property
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
            <div className="col-md-9">
              <table className="manage-table responsive-table">
                <tbody>
                  <tr>
                    <th>Property</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                  {/* Item #1 */}
                  <tr>
                    <td className="utf-title-container">
                      <img src="images/listing-02.jpg" alt="" />
                      <div className="title">
                        <h4>
                          <a href="/single-property-page-1">
                            Renovated Luxury Apartment
                          </a>
                        </h4>
                        <span>2021 San Pedro, Los Angeles</span>{" "}
                        <span className="table-property-price">$20,000/mo</span>
                      </div>
                    </td>
                    <td className="utf-expire-date">12 Jan, 2020</td>
                    <td className="action">
                      <a href="#" className="edit tooltip left" title="Edit">
                        <i className="icon-feather-edit" />
                      </a>
                      <a
                        href="#"
                        className="delete tooltip left"
                        title="Delete"
                      >
                        <i className="icon-feather-trash-2" />
                      </a>
                    </td>
                  </tr>
                  {/* Item #2 */}
                  <tr>
                    <td className="utf-title-container">
                      <img src="images/listing-05.jpg" alt="" />
                      <div className="title">
                        <h4>
                          <a href="/single-property-page-1">
                            Renovated Luxury Apartment
                          </a>
                        </h4>
                        <span>2021 San Pedro, Los Angeles</span>{" "}
                        <span className="table-property-price">$20,000/mo</span>
                      </div>
                    </td>
                    <td className="utf-expire-date">12 Jan, 2020</td>
                    <td className="action">
                      <a href="#" className="edit tooltip left" title="Edit">
                        <i className="icon-feather-edit" />
                      </a>
                      <a
                        href="#"
                        className="delete tooltip left"
                        title="Delete"
                      >
                        <i className="icon-feather-trash-2" />
                      </a>
                    </td>
                  </tr>
                  {/* Item #3 */}
                  <tr>
                    <td className="utf-title-container">
                      <img src="images/listing-04.jpg" alt="" />
                      <div className="title">
                        <h4>
                          <a href="/single-property-page-1">
                            Renovated Luxury Apartment
                          </a>
                        </h4>
                        <span>2021 San Pedro, Los Angeles</span>{" "}
                        <span className="table-property-price">$20,000/mo</span>
                      </div>
                    </td>
                    <td className="utf-expire-date">12 Jan, 2020</td>
                    <td className="action">
                      <a href="#" className="edit tooltip left" title="Edit">
                        <i className="icon-feather-edit" />
                      </a>
                      <a
                        href="#"
                        className="delete tooltip left"
                        title="Delete"
                      >
                        <i className="icon-feather-trash-2" />
                      </a>
                    </td>
                  </tr>
                  {/* Item #4 */}
                  <tr>
                    <td className="utf-title-container">
                      <img src="images/listing-06.jpg" alt="" />
                      <div className="title">
                        <h4>
                          <a href="/single-property-page-1">
                            Renovated Luxury Apartment
                          </a>
                        </h4>
                        <span>2021 San Pedro, Los Angeles</span>{" "}
                        <span className="table-property-price">$20,000/mo</span>
                      </div>
                    </td>
                    <td className="utf-expire-date">12 Jan, 2020</td>
                    <td className="action">
                      <a href="#" className="edit tooltip left" title="Edit">
                        <i className="icon-feather-edit" />
                      </a>
                      <a
                        href="#"
                        className="delete tooltip left"
                        title="Delete"
                      >
                        <i className="icon-feather-trash-2" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <a
                href="/add-new-property"
                className="utf-centered-button margin-top-30 button"
              >
                Submit New Property
              </a>
            </div>
          </div>
        </div>
        <div class="margin-top-65"></div>
      </div>
    </Layout>
  );
}

export default MyProperties;
