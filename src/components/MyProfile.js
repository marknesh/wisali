import React from 'react'
import Layout from './Layout'

function MyProfile() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>My Profile</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
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
      {/* Widget */}
      <div className="col-md-3">
        <div className="margin-bottom-20"> 
          <div className="utf-edit-profile-photo-area"> <img src="images/agent-02.jpg" alt="" />
            <div className="utf-change-photo-btn-item">
              <div className="utf-user-photo-upload"> <span><i className="fa fa-upload" /> Upload Photo</span>
                <input type="file" className="upload tooltip top" title="Upload Photo" />
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="sidebar margin-top-20">
          <div className="user-smt-account-menu-container">
            <ul className="user-account-nav-menu">
              <li><a href="/my-profile" className="current"><i className="sl sl-icon-user" /> My Profile</a></li>
              {/* <li><a href="my-bookmarks.html"><i class="sl sl-icon-star"></i> Bookmark Listing</a></li> */}
              <li><a href="/my-properties"><i className="sl sl-icon-docs" /> My Property</a></li>
              <li><a href="/add-new-property"><i className="sl sl-icon-action-redo" /> New Property</a></li>
              <li><a href="/change-password"><i className="sl sl-icon-lock" /> Change Password</a></li>
              <li><a href="#"><i className="sl sl-icon-power" /> Log Out</a></li>
            </ul>            
          </div>
        </div>
        <div className="widget utf-sidebar-widget-item">
          <div className="utf-detail-banner-add-section">
            <a href="#"><img src="images/banner-add-2.jpg" alt="banner-add-2" /></a>
          </div>             
        </div>
      </div>
      <div className="col-md-9">
        <div className="utf-user-profile-item">
          <div className="utf-submit-page-inner-box">
            <h3>Private Account</h3>
            <div className="content with-padding">
              <div className="col-md-6">
                <label>Your Name</label>
                <input defaultValue="John Williams" type="text" />
              </div>
              <div className="col-md-6">
                <label>Your Title</label>
                <input defaultValue="Agent In Afghanistan" type="text" />
              </div>	
              <div className="col-md-6">
                <label>Phone Number</label>
                <input defaultValue="(+21) 124 123 4546" type="text" />
              </div>
              <div className="col-md-6">	
                <label>Email Address</label>
                <input defaultValue="info@example.com" type="text" />
              </div>
              <div className="col-md-12 margin-bottom-0">
                <label>Message</label>
                <textarea name="about" id="about" cols={20} rows={5} defaultValue={"Lorem Ipsum is simply dummy text of printing and type setting industry Lorem Ipsum been industry standard dummy text ever since. Lorem Ipsum is simply dummy text of printing and type setting industry Lorem Ipsum been industry standard dummy text ever since. "} /> 
              </div>
            </div>				
          </div>
          <div className="utf-submit-page-inner-box">
            <h3>Social Accounts</h3>
            <div className="content with-padding">
              <div className="col-md-6">
                <label><i className="icon-brand-facebook" /> Facebook</label>
                <input defaultValue="https://www.facebook.com" type="text" />
              </div>
              <div className="col-md-6">
                <label><i className="icon-brand-twitter" /> Twitter</label>
                <input defaultValue="https://www.twitter.com" type="text" />
              </div>
              <div className="col-md-6">
                <label><i className="icon-brand-linkedin" /> Linkedin</label>
                <input defaultValue="https://www.linkedin.com" type="text" />
              </div>
              <div className="col-md-6">
                <label><i className="icon-brand-google-plus-g" /> Google+</label>
                <input defaultValue="https://www.google.com" type="text" />	
              </div>
              <div className="col-md-6">
                <label><i className="icon-brand-pinterest" /> Pinterest</label>
                <input defaultValue="https://www.pinterest.com" type="text" />	
              </div>
              <div className="col-md-6">
                <label><i className="icon-feather-instagram" /> Instagram</label>
                <input defaultValue="https://www.instagram.com" type="text" />	
              </div>
            </div>					
          </div>	
          <div className="row">
            <div className="col-md-12">
              <button className="utf-centered-button button margin-top-0 margin-bottom-20">Save Changes</button>
            </div>
          </div>
        </div>          
      </div>
    </div>
  </div>
</div>
<div class="margin-top-65"></div>

            
        </Layout>
    )
}

export default MyProfile
