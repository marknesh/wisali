import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
       
  <div>
       <Helmet>
                  
           


                  <script src="scripts/chosen.min.js"   ></script> 
                  <script   src="scripts/magnific-popup.min.js"   ></script> 
                  <script   src="scripts/owl.carousel.min.js"   ></script> 
                  <script   src="scripts/rangeSlider.js"   ></script> 
                  <script   src="scripts/sticky-kit.min.js"   ></script> 
                  <script   src="scripts/slick.min.js"   ></script> 
                  <script    src="scripts/mmenu.min.js"   ></script> 
                  <script   src="scripts/tooltips.min.js"   ></script> 
                  <script   src="scripts/masonry.min.js"   ></script> 
                  <script   src="scripts/jquery.counterup.min.js"   ></script> 
                  <script src="scripts/custom_jquery.js"  ></script>
                
                  
         
         
         <script  src="http://maps.google.com/maps/api/js?sensor=false&amp;language=en" ></script> 
         <script   src="scripts/infobox.min.js"  ></script> 
         <script   src="scripts/markerclusterer.js"   ></script> 
         <script   src="scripts/maps.js"   ></script> 
            </Helmet>
    
   <div className="utf-compare-slidebar-area">
  <div className="utf-smt-trigger-item" />
  <div className="utf-smt-content">
    <h4>Compare Property
      <span className="utf-smt-mobile-trigger-item" />
    </h4>
    <div className="utf-smt-property-item"> 
      <div className="utf-listing-item compact"> <a href="/single-property-page-1" className="utf-smt-listing-img-container">
          <div className="utf-remove-compare-item"><i className="icon-line-awesome-close" /></div>
          <div className="utf-listing-badges-item"><span className="for-sale">For Sale</span></div>
          <div className="utf-listing-img-content-item"> <span className="utf-listing-compact-title-item">Renovated Luxury Apartment <i>$420,000</i></span> </div>
          <img src="images/listing-01.jpg" alt="" /> </a> 
      </div>
      <div className="utf-listing-item compact"> <a href="/single-property-page-1" className="utf-smt-listing-img-container">
          <div className="utf-remove-compare-item"><i className="icon-line-awesome-close" /></div>
          <div className="utf-listing-badges-item"><span className="for-sale">For Sale</span></div>
          <div className="utf-listing-img-content-item"> <span className="utf-listing-compact-title-item">Renovated Luxury Apartment <i>$420,000</i></span> </div>
          <img src="images/listing-02.jpg" alt="" /> </a> 
      </div>        
    </div>
    <div className="utf-smt-buttons"><a href="compare-properties.html" className="button">Compare Property</a></div>
  </div>
</div>


  <header id="header-container" class="fullwidth"> 

  <div id="header">
    <div class="container"> 
      
      <div class="left-side"> 
        <div id="logo"> <a href="/"><img src="images/logo.png" alt="" /></a> </div>
        <div class="mmenu-trigger">
          <button class="hamburger hamburger--collapse" type="button"> <span class="hamburger-box"> <span class="hamburger-inner"></span> </span> </button>
        </div>
        
        <nav id="navigation" class="style-1">
          <ul id="responsive">

            <li><a class="current" href="/">Home</a></li>


         <li><a href="#">Listings</a>   
               <ul>
               <li>  <a href="/single-property-page-1">Single Property</a>  </li>
              
              <li><a href="/listings-list-with-map">Multiple Properties</a> </li>
                              
              </ul>
         </li>

    <li><a href="#">Dashboard</a>
              <ul>
                <li><a href="my-profile.html">My Profile</a></li>
                <li><a href="my-properties.html">My Property</a></li>
                <li><a href="add-new-property.html">Add New Property</a></li>
                <li><a href="change-password.html">Change Password</a></li>
              </ul>
           </li>
            <li><a href="#">Pages</a>
              <ul>
                <li><a href="#">Agents</a>
                  <ul>
                    <li><a href="agents-list.html">Agents List</a></li>
                    <li><a href="agents-profile.html">Agents Profile</a></li>
                  </ul>
                </li>
                <li><a href="#">Agency</a>
                  <ul>
                    <li><a href="agency-list.html">Agency List</a></li>
                    <li><a href="agency-profile.html">Agency Profile</a></li>                      
                  </ul>
                </li>

                <li><a href="about.html">About</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
        <li><a href="pricing-tables.html">Pricing Plan</a></li>
        <li><a href="compare-properties.html">Compare Properties</a></li>

              </ul>
            </li>
            <li><a href="blog_detail_left_sidebar.html">Blog</a> </li>

      <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        <div class="clearfix"></div>
      </div>
      
      
      
      <div class="right-side"> 
        <div class="header-widget"> 
          <a href="#utf-signin-dialog-block" class="popup-with-zoom-anim log-in-button sign-in"><i class="icon-line-awesome-user"></i> <span>Sign In</span></a> 
          <a href="add-new-property.html" class="button border"><i class="icon-feather-plus-circle"></i> <span>Create Property</span></a> 
        </div>
      </div>

      
    </div>
  </div>

</header>
<div className="clearfix" />

  
</div>
    )
}

export default Navbar
