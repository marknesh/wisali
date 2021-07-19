import React, { useState } from 'react'

function Footer() {


  const [open,setOpen]=useState(false)

  function openChat(){

   return  setOpen(!open)
  }
    return (
        <div>
        
             <div id="footer"> 
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12"> 
            <a href="/"><img className="footer-logo" src="images/footer_logo.png" alt="" /></a>
            <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when unknown printer took a galley type scrambled.</p>          
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6">
            <h4>Useful Links</h4>
            <ul className="utf-footer-links-item">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Properties</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6">
            <h4>My Account</h4>
            <ul className="utf-footer-links-item">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">My Profile</a></li>
              <li><a href="#">Add Property</a></li>
              <li><a href="#">My Listing</a></li>
              <li><a href="#">Favorites</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6">
            <h4>Resources</h4>
            <ul className="utf-footer-links-item">
              <li><a href="/register">My Account</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Condition</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6">
            <h4>Pages</h4>
            <ul className="utf-footer-links-item">
              <li><a href="#">Our Partners</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">FAQ Page</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Condition</a></li>
            </ul>
          </div>	
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="copyrights">Copyright © 2021 All Rights Reserved.</div>
          </div>
        </div>
      </div>
    {/* </div> */}
    {/* Footer / End */} 
    {/* Back To Top Button */}
    <div id="backtotop"><a href="#" /></div>
  </div>  
  {/* Sign In Popup */}
  <div id="utf-signin-dialog-block" className="zoom-anim-dialog mfp-hide dialog-with-tabs"> 
    <div className="utf-signin-form-part">
      <ul className="utf-popup-tabs-nav-item">
        <li><a href="#login">Log In</a></li>
        <li><a href="#register">Register</a></li>
      </ul>
      <div className="utf-popup-container-part-tabs"> 
        {/* Login */}
        <div className="utf-popup-tab-content-item" id="login"> 
          <div className="utf-welcome-text-item">
            <h3>Welcome Back! Sign in to Continue.</h3>
            <span>Don't Have an Account? <a href="#" className="register-tab">Sign Up!</a></span> 
          </div>
          <form method="post" id="login-form">
            <div className="utf-no-border">
              <input type="text" name="emailaddress" id="emailaddress" placeholder="Email Address" required />
            </div>
            <div className="utf-no-border">
              <input type="password" name="password" id="password" placeholder="Password" required />
            </div>
            <div className="checkbox margin-top-0">
              <input type="checkbox" id="two-step" />
              <label htmlFor="two-step"><span className="checkbox-icon" /> Remember Me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </form>
          <button className="button full-width utf-button-sliding-icon ripple-effect" type="submit" form="login-form">Log In <i className="icon-feather-chevrons-right" /></button>
          <div className="utf-social-login-separator-item"><span>or</span></div>
          <div className="utf-social-login-buttons-block">
            <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f" /> Facebook</button>
            <button className="google-login ripple-effect"><i className="icon-brand-google-plus-g" /> Google+</button>
            <button className="twitter-login ripple-effect"><i className="icon-brand-twitter" /> Twitter</button>
          </div>
        </div>
        {/* Register */}
        <div className="utf-popup-tab-content-item" id="register"> 
          <div className="utf-welcome-text-item">
            <h3>Create your Account!</h3>
            <span>Don't Have an Account? <a href="#" className="register-tab">Sign Up!</a></span> 
          </div>        
          <form method="post" id="utf-register-account-form">
            <div className="utf-no-border margin-bottom-20">
              <select className="utf-chosen-select-single-item utf-with-border" title="Single User">
                <option>Private</option>
                <option>Business</option>
                <option>Platinum</option>				
              </select>
            </div>
            <div className="utf-no-border">
              <input type="text" name="name" id="name" placeholder="First Name" required />
            </div>
            <div className="utf-no-border">
              <input type="text" name="name" id="name" placeholder="Second Name" required />
            </div>
            <div className="utf-no-border">
              <input type="text" name="emailaddress-register" id="emailaddress-register" placeholder="Email Address" required />
            </div>
            <div className="utf-no-border">
              <input type="password" name="password-register" id="password-register" placeholder="Password" required />
            </div>
            <div className="utf-no-border">
              <input type="password" name="password-repeat-register" id="password-repeat-register" placeholder="Repeat Password" required />
            </div>
            <div className="checkbox margin-top-0">
              <input type="checkbox" id="two-step0" />
              <label htmlFor="two-step0"><span className="checkbox-icon" /> By Registering You Confirm That You Accept <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a></label>
            </div>
          </form>
          <button className="margin-top-10 button full-width utf-button-sliding-icon ripple-effect" type="submit" form="utf-register-account-form">Register <i className="icon-feather-chevrons-right" /></button>
          <div className="utf-social-login-separator-item"><span>or</span></div>
          <div className="utf-social-login-buttons-block">
            <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f" /> Facebook</button>
            <button className="google-login ripple-effect"><i className="icon-brand-google-plus-g" /> Google+</button>
            <button className="twitter-login ripple-effect"><i className="icon-brand-twitter" /> Twitter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Sign In Popup / End */}
  {/* Open Chat Box */} 
  {!open && <button className="open-button" onClick={openChat}>Chat</button>}
  {open &&
  <div className="chat-popup" id="myForm">
    <form action="/action_page.php" className="form-container">
      <h3>Chat</h3>
      <label htmlFor="msg"><b> How can we help you today?</b></label>
      <textarea placeholder="Type message.." name="msg" required defaultValue={""} />
      <button type="submit" className="btn">Send</button>
      <button type="button" className="btn cancel" onClick={openChat}>Close</button>
    </form>
  </div>

  }








            
        </div>
    )
}

export default Footer
