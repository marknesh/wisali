import React from 'react'
import Layout from './Layout'

function Login() {
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
            <form method="post" className="login">
              <div className="form-row form-row-wide">
                <input type="text" className="input-text" name="email" id="email" placeholder="Email Address"  />
              </div>
              <div className="form-row form-row-wide">
                <input className="input-text" type="password" name="password" placeholder="Password" id="password" />
              </div>
              <div className="form-row">
                <div className="checkbox margin-top-10 margin-bottom-10">
                  <input type="checkbox" id="two-step" />
                  <label htmlFor="two-step"><span className="checkbox-icon" /> Remember Me</label>
                </div>
                <a className="lost_password" href="/forgot-password">Forgot Password?</a>	
              </div>
              <input type="submit" className="button full-width border margin-top-10" name="login" defaultValue="Login" />
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

export default Login
