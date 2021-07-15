import React from 'react'
import Layout from './Layout'

function AddNewProperty() {

const NINE=12345;

    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Add New Property</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
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
              <li><a href="/add-new-property" className="current"><i className="sl sl-icon-action-redo" /> New Property</a></li>
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
      {/* Submit Page */}
      <div className="col-md-9">
        <div className="submit-page">
          {/* Section */}
          <div className="utf-submit-page-inner-box">
            <h3>Property Basic Information</h3>
            <div className="content with-padding">             
              <div className="col-md-12">
                <h5>Property Title</h5>
                <input className="search-field" placeholder="Property Title" type="text" defaultValue />				  
              </div>
              <div className="col-md-6">
                <h5>Status</h5>
                <select className="utf-chosen-select-single-item">
                  <option label="blank" />
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
              </div>
              <div className="col-md-6">
                <h5>Type</h5>
                <select className="utf-chosen-select-single-item">
                  <option label="blank" />
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Commercial</option>
                  <option>Garage</option>
                  <option>Lot</option>
                </select>
              </div>
              <div className="col-md-4">
                <h5>Price</h5>
                <div className="select-input disabled-first-option">
                  <input type="text" placeholder={NINE} data-unit="USD" />
                </div>
              </div>
              <div className="col-md-4">
                <h5>Area</h5>
                <div className="select-input disabled-first-option">
                  <input type="text" placeholder={NINE} data-unit="Sq Ft" />
                </div>
              </div>
              <div className="col-md-4">
                <h5>Rooms</h5>
                <select className="utf-chosen-select-single-item">
                  <option label="blank" />
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>More than 5</option>
                </select>
              </div>
            </div>
          </div>
          {/* Section / End */} 
          {/* Section */}
          <div className="utf-submit-page-inner-box">
            <h3>Property Gallery</h3>
            <div className="content with-padding">   
              <div className="col-md-12 submit-section">
                <form action="file-upload" className="dropzone" />
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
                <input type="text" placeholder="Address" />
              </div>
              <div className="col-md-6">
                <h5>City Name</h5>
                <input type="text" placeholder="City Name" />
              </div>
              <div className="col-md-6">
                <h5>State</h5>
                <input type="text" placeholder="State" />
              </div>
              <div className="col-md-6">
                <h5>Zip-Code</h5>
                <input type="text" placeholder={NINE} />
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
                <textarea name="summary" cols={20} rows={2} id="summary" defaultValue={""} />
              </div>
              <div className="col-md-4">
                <h5>Building Age</h5>
                <select className="utf-chosen-select-single-item">
                  <option label="blank" />
                  <option>0 - 1 Years</option>
                  <option>0 - 5 Years</option>
                  <option>0 - 10 Years</option>
                  <option>0 - 20 Years</option>
                  <option>0 - 50 Years</option>
                  <option>50 + Years</option>
                </select>
              </div>
              <div className="col-md-4">
                <h5>Bed Rooms</h5>
                <select className="utf-chosen-select-single-item">
                  <option label="blank" />
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="col-md-4">
                <h5>Bath Rooms</h5>
                <select className="utf-chosen-select-single-item">
                  <option label="blank" />
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="col-md-12">	
                <h5 className="margin-top-15">Other Features <span /></h5>
                <div className="checkboxes in-row margin-bottom-20">
                  <input id="check-2" type="checkbox" name="check" />
                  <label htmlFor="check-2">Air Conditioning</label>
                  <input id="check-3" type="checkbox" name="check" />
                  <label htmlFor="check-3">Swimming Pool</label>
                  <input id="check-4" type="checkbox" name="check" />
                  <label htmlFor="check-4">Central Heating</label>
                  <input id="check-5" type="checkbox" name="check" />
                  <label htmlFor="check-5">Laundry Room</label>
                  <input id="check-6" type="checkbox" name="check" />
                  <label htmlFor="check-6">Gym</label>
                  <input id="check-7" type="checkbox" name="check" />
                  <label htmlFor="check-7">Alarm</label>
                  <input id="check-8" type="checkbox" name="check" />
                  <label htmlFor="check-8">Window Covering</label>
                  <input id="check-9" type="checkbox" name="check" />
                  <label htmlFor="check-9">None</label>
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
                <input type="text" placeholder="Name" />
              </div>
              <div className="col-md-4">
                <h5>Email Address</h5>
                <input type="text" placeholder="Email Address" />
              </div>
              <div className="col-md-4">
                <h5>Phone Number</h5>
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
          </div>		
          <div className="row">
            <div className="col-md-12">
              <a href="/add-new-property" className="utf-centered-button button">Submit Property</a>
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

export default AddNewProperty
