import React from 'react'
import Layout from './Layout'

function ChangePassword() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Change Password</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
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
              <li><a href="/my-profile"><i className="sl sl-icon-user" /> My Profile</a></li>
              <li><a href="/my-properties"><i className="sl sl-icon-docs" /> My Property</a></li>
              <li><a href="/add-new-property"><i className="sl sl-icon-action-redo" /> New Property</a></li>
              <li><a href="/change-password" className="current"><i className="sl sl-icon-lock" /> Change Password</a></li>
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
            <h3>Change Password</h3>
            <div className="content with-padding">
              <div className="col-md-4">
                <label>Current Password</label>
                <input type="password" placeholder="*********" />
              </div>
              <div className="col-md-4">
                <label>New Password</label>
                <input type="password" placeholder="*********" />
              </div>
              <div className="col-md-4">
                <label>Confirm New Password</label>
                <input type="password" placeholder="*********" />
              </div>
            </div>			
          </div>  
          <div className="row">
            <div className="col-md-12">
              <a href="#" className="utf-centered-button button">Save Changes</a>
            </div>
          </div>	
        </div>
      </div>
    </div>
  </div>
  <div class="margin-top-65"></div>
</div>

            
        </Layout>
    )
}

export default ChangePassword
