import React from 'react'
import Layout from './Layout'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { auth, facebookProvider, provider } from '../firebase';
import firebase from "firebase/app"
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';


function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [remember,setRemember]=useState(false)
  const {login}=useAuth()

  const handleFacebook=()=>{
    auth.signInWithPopup(facebookProvider).then(res=>{
      window.location.href="/"


     }).catch(err=>{

       toast.warn(<span className="alertText">An error occurred. Please try siging again!</span>, {
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

  const handleGoogle=()=>{
    auth.signInWithPopup(provider).then(res=>{
      window.location.href="/"


     }).catch(err=>{

       toast.warn(<span className="alertText">An error occurred. Please try again!</span>, {
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
  const onSubmit = async(data) => {
if(!remember){
  await  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

}
if(remember){
  await  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
}
await login(data.email,data.password)
            
.then(()=>{
  window.location.href="/"

 })
 .catch(err=>{

if(err.code==="auth/invalid-email"){
  toast.warn(<span className="alertText">Invalid email address!</span>, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

return
}

  if(err.code==="auth/wrong-password"){
    toast.warn(<span className="alertText">Password is incorrect!</span>, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  
return
  }
  if(err.code==="auth/user-not-found"){
    toast.warn(<span className="alertText">User does not exist!</span>, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    return;

  }


   
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


  };

  
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Log In</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li>Log In</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact */} 
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="my-account">
          <div className="tabs-container"> 
            {/* Login */}
            <div className="utf-welcome-text-item">
              <h3>Welcome Back! Sign in to Continue</h3>
              <span>Don't Have an Account? <a href="/register">Sign Up!</a></span> 
            </div>
            <form className="login" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row form-row-wide">
                <input type="text" className="input-text" name="email" id="email" placeholder="Email Address" {...register("email",{required:true})}  />
                {errors?.email?.type==="required" && <div className="formError">email is required</div>}
              </div>
              <div className="form-row form-row-wide">
                <input className="input-text" type="password" name="password" placeholder="Password" {...register("password",{required:true})} id="password" />
                {errors?.password?.type==="required" && <div className="formError">password is required</div>}
              </div>
              <div className="form-row">
              <div className="checkbox margin-top-0" onClick={()=>setRemember(!remember)}>
              <input type="checkbox" className="remember" id="two-step" />
              <label htmlFor="two-step"><span className={`checkbox-icon ${remember && "markcheck"}`} /> Remember Me</label>
            </div>
                <a className="lost_password" href="/forgot-password">Forgot Password?</a>	
              </div>
              <input type="submit" className="button full-width border margin-top-10" name="login" defaultValue="Login" />
              <div className="utf-social-login-separator-item"><span>or</span></div>
          
            </form>
            <div className="utf-social-login-buttons-block">
                <button onClick={handleFacebook} className="button social-login via-twitter"><i className="icon-brand-facebook-f" /> Facebook</button>
                <button   onClick={handleGoogle} className="button social-login via-gplus"><i className="icon-brand-google-plus-g" /> Google+</button>
                <button className="button social-login via-facebook"><i className="icon-brand-twitter" /> Twitter</button>
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

export default Login
