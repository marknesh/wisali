import React from 'react'

function Navbar() {
    return (
       
  
  <header id="header-container" class="fullwidth"> 

  <div id="header">
    <div class="container"> 
      
      <div class="left-side"> 
        <div id="logo"> <a href="index.html"><img src="images/logo.png" alt="" /></a> </div>
        <div class="mmenu-trigger">
          <button class="hamburger hamburger--collapse" type="button"> <span class="hamburger-box"> <span class="hamburger-inner"></span> </span> </button>
        </div>
        
        <nav id="navigation" class="style-1">
          <ul id="responsive">

            <li><a class="current" href="index.html">Home</a></li>


         <li><a href="#">Listings</a>   
               <ul>
               <li><a href="single-property-page-1.html">Single Property</a>  </li>
              
              <li><a href="listings-list-with-map.html">Multiple Properties</a> </li>
                              
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
    )
}

export default Navbar
