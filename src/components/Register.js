import React from 'react'
import Layout from './Layout'

function Register() {
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
            <form method="post" className="login">
              <div className="form-row form-row-wide margin-bottom-15">
                <select className="utf-chosen-select-single-item utf-with-border" title="Single User"> 
                  <option>Private</option> 
                  <option>Business</option>
                  <option>Platinum</option>	
                </select>
              </div>   
              <div className="form-row form-row-wide">
                <input type="text" className="input-text" name="username" id="username" placeholder="Firstname" />
              </div>  
              <div className="form-row form-row-wide">
                <input type="text" className="input-text" name="username" id="username" placeholder="Second Name" />
              </div>
              <div className="form-row form-row-wide">
                <input type="text" className="input-text" name="email" id="email" placeholder="Email Address"  />
              </div>
              <div className="form-row form-row-wide">
                <input className="input-text" type="password" name="password" placeholder="Password" id="password" />
              </div>
              <div className="form-row form-row-wide">
                <input className="input-text" type="password" name="password" placeholder="Repeat Password" id="repeat_password" />
              </div>
              <div className="form-row checkbox margin-top-10 margin-bottom-10">
                <input type="checkbox" id="two-step0" />
                <label htmlFor="two-step0"><span className="checkbox-icon" /> By Registering You Confirm That You Accept <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a></label>
              </div>
              <input type="submit" className="button full-width border margin-top-10" name="Create An Account" defaultValue="Create An Account" />
              <div className="utf-social-login-separator-item"><span>or</span></div>
              <div className="utf-social-login-buttons-block">
                <button className="button social-login via-twitter"><i className="icon-brand-facebook-f" /> Facebook</button>
                <button className="button social-login via-gplus"><i className="icon-brand-google-plus-g" /> Google+</button>
                <button className="button social-login via-facebook"><i className="icon-brand-twitter" /> Twitter</button>
              </div>	
            </form>
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
