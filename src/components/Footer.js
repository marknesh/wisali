import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';

function Footer() {
  const {user}=useAuth()


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
          {user &&
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
}
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

  {/* Sign In Popup / End */}
  {/* Open Chat Box */} 
  {!open && <button className="open-button" onClick={openChat}>Chat</button>}
  {open &&
  <div className="chat-popup" id="myForm">
    <form action="/action_page.php" className="form-container">
      <h3>Chat</h3>
      <label htmlFor="msg"><b> How can we help you today?</b></label>
      <textarea placeholder="Type message.." name="msg" required />
      <button type="submit" className="btn">Send</button>
      <button type="button" className="btn cancel" onClick={openChat}>Close</button>
    </form>
  </div>

  }








            
        </div>
    )
}

export default Footer
