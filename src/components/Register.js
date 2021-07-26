import React from 'react'
import Layout from './Layout'
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { auth, db, facebookProvider, provider } from '../firebase';

function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {signup}=useAuth()
  const [agree,setAgree]=useState(false)
  const [agreeError,setAgreeError]=useState(false)

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
  const onSubmit = async(data) =>{

    if(!agree){
      setAgreeError(true)
      return
    }
    if(data.password!==data.repeatpassword){
      toast.error(<span className="alertText">Passwords do not match!</span>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

      return;
    }

    try{
        
      await signup(data.email,data.password)
    
      .then((user)=>{
        db.collection("users").doc(user.uid).set({
          firstname:data.firstname,
          secondname:data.secondname
        },{merge:true}).then(()=>{
         window.location.href="/"
 
        })
 
 
       
      })
      .catch((err)=>{
     
    
         if(err.code==="auth/email-already-in-use"){
           toast.error(<span className="alertText">Email address already exists!</span>, {
             position: "top-center",
             autoClose: 5000,
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


  };

  
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Register</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li>Register</li>
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
            {/* Register */}
            <div className="utf-welcome-text-item">
              <h3>Create Your New Account!</h3>
              <span>Do You Have an Account? <a href="/login">Log In!</a></span> 
            </div>
            <form  className="login" onSubmit={handleSubmit(onSubmit)}>
              {/* <div className="form-row form-row-wide margin-bottom-15">
                <select className="utf-chosen-select-single-item utf-with-border" title="Single User"> 
                  <option>Private</option> 
                  <option>Business</option>
                  <option>Platinum</option>	
                </select>
              </div>    */}
              <div className="form-row form-row-wide">
                <input type="text" className="input-text" {...register("firstname", { required: true })} name="firstname" id="Firstname" placeholder="First Name" />
                {errors?.firstname?.type==="required" && <div className="formError">firstname is required</div>}
              </div>  
              <div className="form-row form-row-wide">
              <input type="text" className="input-text" {...register("secondname", { required: true })} name="secondname" id="secondname" placeholder="Second Name" />
                {errors?.secondname?.type==="required" && <div className="formError">second name is required</div>}
              </div>
              <div className="form-row form-row-wide">
                <input type="text" className="input-text" {...register("email", { required: true, pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      } })} name="email" id="email" placeholder="Email Address"  />
                {errors?.email?.type==="required" && <div className="formError">email is required</div>}
                {errors?.email?.type==="pattern" && <div className="formError">invalid email address</div>}
              </div>
              <div className="form-row form-row-wide">
                <input className="input-text" type="password" {...register("password", { required: true,minLength:6 })} name="password" placeholder="Password" id="password" />
                {errors?.password?.type==="required" && <div className="formError">password is required</div>}
                {errors?.password?.type==="minLength" && <div className="formError">password should have atleast 6 characters</div>}
              </div>
              <div className="form-row form-row-wide">
                <input className="input-text" type="password" name="password" {...register("repeatpassword", { required: true,minLength:6 })} placeholder="Repeat Password" id="repeat_password" />
                {errors?.repeatpassword?.type==="required" && <div className="formError">confirmation password is required</div>}
                {errors?.repeatpassword?.type==="minLength" && <div className="formError">password should have atleast 6 characters</div>}
              </div>
              <div className="form-row checkbox margin-top-10 margin-bottom-10" onClick={()=>{setAgree(!agree)
              setAgreeError(false)
              }}>
                <input type="checkbox" id="two-step0"  />
                <label htmlFor="two-step0"><span className={`checkbox-icon ${agree && "markcheck"}`} /> By Registering You Confirm That You Accept <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a></label>
              </div>
              {agreeError && <div className="formError">agree to continue</div>}
              <input type="submit" className="button full-width border margin-top-10" name="Create An Account" defaultValue="Create An Account" />
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

export default Register
