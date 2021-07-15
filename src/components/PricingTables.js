import React from 'react'
import Layout from './Layout'

function PricingTables() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Pricing Plans</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li>Pricing</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Pricing Tables */} 
  <div className="container"> 
    <div className="row">
      <div className="utf-pricing-container-area margin-top-5"> 
        <div className="col-md-12">
          <div className="utf-pricing-container-area margin-top-5"> 
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="plan">
                <div className="utf-plan-price">
                  <h3>Private</h3>
                  <span className="value">$0<sub>/Per Year</sub></span> <span className="period">Private User Membership for 90 days</span> 
                </div>
                <div className="utf-plan-features">
                  <ul>
                    <li>Free</li>
                    <li>Three Listings</li>
                    <li>10 Property Images </li>
                    <li>90 Days Availability</li>
                    <li>Not Featured</li>
                    <li>Limited Support </li> 
                  </ul>
                  <a className="button border" href>Registered</a> 
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="plan">
                <div className="utf-plan-price">
                  <h3>Business</h3>
                  <span className="value">€120<sub>/Per Year</sub></span> <span className="period">Business User Membership for one year</span> 
                </div>
                <div className="utf-plan-features">
                  <ul>
                    <li>Yearly Fee</li>
                    <li>3(Plus) Listings</li>
                    <li>10 Property Images </li>
                    <li>One Year Availability</li>
                    <li>Featured In Search Results</li>
                    <li>24/7 Support</li>
                  </ul>
                  <a className="button border" href="/payment">Purchase Now</a> 
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="plan featured">
                <div className="utf-listing-badges-item"> <span className="featured">Featured</span> </div>
                <div className="utf-plan-price">
                  <h3>Premium</h3>
                  <span className="value">€200<sub>/Per Year</sub></span> <span className="period">Premium User Membership for One Year</span> 
                </div>
                <div className="utf-plan-features">
                  <ul>
                    <li>Yearly Fee</li>
                    <li>Unlimited Listings</li>
                    <li>10 Property Images </li>
                    <li>One Year Availability</li>
                    <li>Featured In Search Results</li>
                    <li>24/7 Support</li>
                  </ul>
                  <a className="button border" href="/payment">Purchase Now</a> 
                </div>
              </div>
            </div>
          </div></div></div></div></div>
          
          <div class="margin-top-65"></div>
          </div>

            
        </Layout>
    )
}

export default PricingTables
