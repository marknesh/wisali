import React from 'react'
import Layout from './Layout'

function ForgotPassword() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Forgot Password</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li>Forgot Password</li>
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
              <h3>Forgot Your Password?</h3>
              <span>Enter your email address below and we'll send you email with password</span> 
            </div>
            <form method="post" className="login">
              <div className="form-row form-row-wide">
                <input type="text" className="input-text" name="email" id="email" placeholder="Email Address" defaultValue />
              </div>
              <input type="submit" className="button full-width border margin-top-10" name="Send Recovery Email" defaultValue="Send Recovery Email" />				
              <div className="forget-text margin-top-15">
                <span>Forget It, <a href="javascript:void(0);">Send me Back</a> to The Sign In.</span> 
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

export default ForgotPassword
