import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'
import { useAuth } from '../context/AuthContext'
import { auth, facebookProvider, provider } from '../firebase'


function Navbar() {
const [email,setEmail]=useState(null)
const [emailError,setEmailError]=useState(null)
const [password,setPassword]=useState(null)
const [passwordError,setPasswordError]=useState(null)

const [confirmPassword,setConfirmPassword]=useState(null)
const [confirmPasswordError,setConfirmPasswordError]=useState(null)

const [firstName,setFirstName]=useState(null)
const [firstNameError,setFirstNameError]=useState(null)

const [secondName,setSecondName]=useState(null)
const [secondNameError,setSecondNameError]=useState(null)

const [agree,setAgree]=useState(false)
const [agreeError,setAgreeError]=useState(null)

  let emailRef=useRef(null)
  let registerRef=useRef(null)

  const apiKey=process.env.REACT_APP_MAP_API_KEY

  let buttonref=useRef(null)
  let signOutRef=useRef(null)
    

const {user,signup}=useAuth()




registerRef = (element) => {
  if(element){
    element.onclick = async(e) => {
      e.preventDefault()

      if(!email?.trim() && !password?.trim() && !confirmPassword?.trim()  && !firstName?.trim() && !secondName?.trim() && !firstName?.trim()  ){
       
          setEmailError("email is required")
           setPasswordError("password is required")
           setConfirmPasswordError("password confirmation is required")
           setFirstNameError("firstName is required")
           setSecondNameError("secondName is required")
        
           return;

        
      }
if(!email?.trim()){
 return  setEmailError("email is required")
}
if(!password?.trim()){
  return  setPasswordError("password is required")
 }
 if(!confirmPassword?.trim()){
  return  setConfirmPasswordError("password confirmation is required")
 }
 if( !firstName?.trim() ){
   return   setFirstNameError("first name is required")

 }
 if( !secondName?.trim() ){
  return   setSecondNameError("second name is required")

}
if( !agree ){
  return    setAgreeError("please agree to continue")

}
      
 

      try{
        
     await signup(email,password)
     .then(()=>{
       window.location.href="/"
     })
     .catch(()=>{
      toast.error(<span className="alertText">An error occurred. Please try again later!</span>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
     })
     
   
    }
    catch(e){
      toast.error(<span className="alertText">An error occurred. Please try again later!</span>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      

    }
    
     }
    
    
  }



}




emailRef = (element) => {
  if(element){
    element.querySelector('.email').onchange = (e) => {
      setEmail(e.target.value)
      setEmailError(null)
    
     }
     element.querySelector('.password').onchange = (e) => {
      setPassword(e.target.value)
      setPasswordError(null)
    
     }
     element.querySelector('.confirmpassword').onchange = (e) => {
      setConfirmPassword(e.target.value)
      setConfirmPasswordError(null)
    
     }
     element.querySelector('.firstName').onchange = (e) => {
      setFirstName(e.target.value)
      setFirstNameError(null)
    
     }
     element.querySelector('.secondName').onchange = (e) => {
      setSecondName(e.target.value)
      setSecondNameError(null)
    
     }
     element.querySelector('.agree').onchange = (e) => {
    
       if (element.querySelector('.agree').checked){
        setAgree(true)

       }
       else{
        setAgree(false)

       }
       
  
     setAgreeError(null)
    
     }
    
  }



}




  buttonref = (element) => {
    if(element){
      element.querySelector('.google-login').onclick = () => {
        auth.signInWithPopup(provider).then(res=>{
         window.location.href="/"
   
   
        })
       }
       element.querySelector('.facebook-login').onclick = () => {
        auth.signInWithPopup(facebookProvider).then(res=>{
         window.location.href="/"
   
   
        }).catch(err=>console.log(err.message))
       }
    }
  
  
  
}


signOutRef = (element) => {
  if(element){
    element.querySelector('.sign-out').onclick = () => {
      auth.signOut().then(res=>{
        window.location.href="/"
  
  
       })
     }
  }



}




    return (
    
       
  <div>
           <Helmet>
         
           
  


<script src={`http://maps.google.com/maps/api/js?key=${apiKey}&sensor=false&amp;language=en`}></script> 

<script src="/scripts/infobox.min.js"></script> 
<script src="/scripts/markerclusterer.js"></script> 
<script src="/scripts/maps.js"></script>
            </Helmet>
        
          
   <div className="utf-compare-slidebar-area">
  <div className="utf-smt-trigger-item"/>
  <div className="utf-smt-content">
    <h4>Compare Property
      <span className="utf-smt-mobile-trigger-item"  />
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
    <div className="utf-smt-buttons"><a href="/compare-properties" className="button">Compare Property</a></div>
  </div>
</div>

{user &&


  <header id="header-container" class="fullwidth" style={{position:"fixed",zIndex:200,top:0,left:0,right:0,backgroundColor:"white"}}> 

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
                <li><a href="/my-profile">My Profile</a></li>
                <li><a href="/my-properties">My Property</a></li>
                <li><a href="/add-new-property">Add New Property</a></li>
                <li><a href="/change-password">Change Password</a></li>
              </ul>
           </li>

            <li><a href="#">Pages</a>
              <ul>
                <li><a href="#">Agents</a>
                  <ul>
                    <li><a href="/agents-list">Agents List</a></li>
                    <li><a href="/agents-profile">Agents Profile</a></li>
                  </ul>
                </li>
                <li><a href="#">Agency</a>
                  <ul>
                    <li><a href="/agency-list">Agency List</a></li>
                    <li><a href="/agency-profile">Agency Profile</a></li>                      
                  </ul>
                </li>

                <li><a href="/about">About</a></li>
            
        <li><a href="/pricing-tables">Pricing Plan</a></li>
        <li><a href="/compare-properties">Compare Properties</a></li>

              </ul>
            </li>
            <li><a href="/blog-detail">Blog</a> </li>

      <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div class="clearfix"></div>
      </div>
      
      
      
      <div class="right-side"> 
        <div class="header-widget"  ref={signOutRef}> 
         {!user &&  <a href="#utf-signin-dialog-block" class="popup-with-zoom-anim log-in-button sign-in"><i class="icon-line-awesome-user"></i> <span>Sign In</span></a> }
         {user &&  <a class="popup-with-zoom-anim log-in-button sign-in sign-out" style={{cursor:"pointer"}}><i class="icon-line-awesome-user"></i> <span>Sign Out</span></a> }
          <a href="/add-new-property" class="button border"><i class="icon-feather-plus-circle"></i> <span>Create Property</span></a> 
        </div>
      </div>

      
    </div>
  </div>

</header>

}



{!user &&


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

            <li><a href="#">Pages</a>
              <ul>
                <li><a href="#">Agents</a>
                  <ul>
                    <li><a href="/agents-list">Agents List</a></li>
                    <li><a href="/agents-profile">Agents Profile</a></li>
                  </ul>
                </li>
                <li><a href="#">Agency</a>
                  <ul>
                    <li><a href="/agency-list">Agency List</a></li>
                    <li><a href="/agency-profile">Agency Profile</a></li>                      
                  </ul>
                </li>

                <li><a href="/about">About</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
        <li><a href="/pricing-tables">Pricing Plan</a></li>
        <li><a href="/compare-properties">Compare Properties</a></li>

              </ul>
            </li>
            <li><a href="/blog-detail">Blog</a> </li>

      <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div class="clearfix"></div>
      </div>
      
      
      
      <div class="right-side"> 
        <div class="header-widget"> 
          <a href="#utf-signin-dialog-block" class="popup-with-zoom-anim log-in-button sign-in"><i class="icon-line-awesome-user"></i> <span>Sign In</span></a> 
          <a href="/add-new-property" class="button border"><i class="icon-feather-plus-circle"></i> <span>Create Property</span></a> 
        </div>
      </div>

      
    </div>
  </div>

</header>


}
<div className="clearfix" />

{/* modal */}

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
          <div className="utf-social-login-buttons-block " ref={buttonref}>
            <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f" /> Facebook</button>
            <button className="google-login ripple-effect" ><i className="icon-brand-google-plus-g" /> Google+</button>
            <button className="twitter-login ripple-effect"><i className="icon-brand-twitter" /> Twitter</button>
          </div>
        </div>
        {/* Register */}
        <div className="utf-popup-tab-content-item" id="register"> 
          <div className="utf-welcome-text-item">
            <h3>Create your Account!</h3>
            <span>Do You Have an Account? <a href="#" className="login-tab">Log in!</a></span> 
          </div>        
          <form  id="utf-register-account-form" ref={emailRef}>
            <div className="utf-no-border margin-bottom-20">
              <select className="utf-chosen-select-single-item utf-with-border" title="Single User">
                <option>Private</option>
                <option>Business</option>
                <option>Platinum</option>				
              </select>
            </div>
            <div className="utf-no-border" >
              <input type="text" name="secondname"   className="firstName" id="name" placeholder="First Name"  />
              {firstNameError &&  <div className="formError">{firstNameError}</div>}
            </div>
            <div className="utf-no-border">
              <input type="text" name="name"  className="secondName" id="secondName" placeholder="Second Name"  />
              {secondNameError &&  <div className="formError">{secondNameError}</div>}
            </div>
            <div className="utf-no-border" >
              <input type="text" name="emailaddress-register" className="email" id="emailaddress-register" placeholder="Email Address" required />
              {emailError &&  <div className="formError">{emailError}</div>}
            </div>
            <div className="utf-no-border">
              <input type="password" name="password-register" className="password" id="password-register" placeholder="Password"  required />
              {passwordError &&  <div className="formError">{passwordError}</div>}
            </div>
            <div className="utf-no-border">
              <input type="password" name="password-repeat-register" className="confirmpassword" id="password-repeat-register" placeholder="Repeat Password" />
              {confirmPasswordError &&  <div className="formError">{confirmPasswordError}</div>}
            </div>
            <div className="checkbox margin-top-0">
              <input type="checkbox" id="two-step0" className="agree" />
              <label htmlFor="two-step0"><span className="checkbox-icon" /> By Registering You Confirm That You Accept <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a></label>
              {agreeError &&  <div className="formError">{agreeError}</div>}
            </div>
          </form>
          <button  ref={registerRef} className="margin-top-10 button full-width utf-button-sliding-icon ripple-effect" type="submit" form="utf-register-account-form">Register <i className="icon-feather-chevrons-right" /></button>
          <div className="utf-social-login-separator-item"><span>or</span></div>
          <div className="utf-social-login-buttons-block " ref={buttonref}>
            <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f" /> Facebook</button>
            <button className="google-login ripple-effect" ><i className="icon-brand-google-plus-g" /> Google+</button>
            <button className="twitter-login ripple-effect"><i className="icon-brand-twitter" /> Twitter</button>
          </div>
        </div>
      </div>
    </div>
  </div>


  
</div>
    )
}

export default Navbar
