import React from 'react'
import Layout from './Layout'

function Contact() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Contact Us</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li>Contact Us</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Container / Start */}
  <div className="container">
    <div className="row">  
      <div className="col-md-12">
        <div className="utf-contact-map margin-bottom-50">
        </div>
      </div>
    </div>	
    {/* Contact Details */}
    <div className="col-md-4">
      <div className="utf-boxed-list-headline-item">
        <h3><i className="icon-feather-map" /> Office Address</h3>
      </div>
      {/* Contact Details */}
      <div className="utf-contact-location-info-aera sidebar-textbox margin-bottom-40">
        <ul className="contact-details">
          <li><i className="icon-feather-smartphone" /> <strong>Phone Number:</strong> <span>(+21) 124 123 4546</span></li>
          <li><i className="icon-feather-globe" /> <strong>Website:</strong> <span>www.example.com</span></li>
        </ul>
      </div>
    </div>
    {/* Contact Form */}
    <div className="col-md-8">
      <section id="contact">
        <div className="utf-boxed-list-headline-item">
          <h3><i className="icon-feather-layers" /> Contact Form</h3>
        </div>
        <div className="utf-contact-form-item">
          <form>
            <div className="row">
              <div className="col-md-6">
                <input name="name" type="text" placeholder="Frist Name" required />                
              </div>
              <div className="col-md-6">
                <input name="name" type="text" placeholder="Last Name" required />                
              </div>
              <div className="col-md-6">
                <input name="email" type="email" placeholder="Email Address" required />                
              </div>
              <div className="col-md-6">
                <input name="name" type="text" placeholder="Subject" required />                
              </div>
              <div className="col-md-12">
                <textarea name="comments" cols={40} rows={3} placeholder="Message..." spellCheck="true" required  />
              </div>
            </div>
            <div className="utf-centered-button margin-bottom-10">	
              <input type="submit" className="submit button" id="submit"  />
            </div>
          </form>
        </div>	  
      </section>
    </div>
    {/* Contact Form / End */}       
  </div>
  <div class="margin-top-65"></div>
</div>

            
        </Layout>
    )
}

export default Contact
