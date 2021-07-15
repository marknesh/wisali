import React from 'react'
import Layout from './Layout'

function AllCategories() {
    return (
        <Layout>
            <div>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="rgba(48, 48, 48, 1)" data-color-opacity="0.8" data-img-width={800} data-img-height={505}>
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>More Homes</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>
                <li>Categories</li>
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
      <div className="col-md-4 col-sm-6"> 
        <a href="/listings-list-with-map" className="img-box">
          <div className="utf-listing-badges-item"> <span className="featured">Featured</span> </div>
          <img src="images/popular-location-01.jpg" alt="" />
          <div className="utf-cat-img-box-content visible">
            <h4>Afghanistan</h4>
            <span>14 Properties</span> 
          </div>
        </a> 
      </div>
      <div className="col-md-4 col-sm-6"> 
        <a href="/listings-list-with-map" className="img-box">
          <img src="images/popular-location-02.jpg" alt="" />	
          <div className="utf-cat-img-box-content visible">
            <h4>Australia</h4>
            <span>24 Properties</span> 
          </div>
        </a> 
      </div>
      <div className="col-md-4 col-sm-6"> 
        <a href="/listings-list-with-map" className="img-box">
          <div className="utf-listing-badges-item"> <span className="featured">Featured</span> </div>
          <img src="images/popular-location-03.jpg" alt="" />
          <div className="utf-cat-img-box-content visible">
            <h4>Bangladesh</h4>
            <span>12 Properties</span> 
          </div>
        </a> 
      </div>
      <div className="col-md-4 col-sm-6"> 
        <a href="/listings-list-with-map" className="img-box">
          <img src="images/popular-location-04.jpg" alt="" />	
          <div className="utf-cat-img-box-content visible">
            <h4>Miami</h4>
            <span>9 Properties</span> 
          </div>
        </a> 
      </div>
      <div className="col-md-4 col-sm-6"> 
        <a href="/listings-list-with-map" className="img-box"> 
          <div className="utf-listing-badges-item"> <span className="featured">Featured</span> </div>
          <img src="images/popular-location-05.jpg" alt="" />
          <div className="utf-cat-img-box-content visible">
            <h4>Belize</h4>
            <span>14 Properties</span> 
          </div>
        </a> 
      </div>
      <div className="col-md-4 col-sm-6"> 
        <a href="/listings-list-with-map" className="img-box">
          <img src="images/popular-location-06.jpg" alt="" />
          <div className="utf-cat-img-box-content visible">
            <h4>Cambodia</h4>
            <span>24 Properties</span> 
          </div>
        </a> 
      </div>
      <div className="col-md-4 col-sm-6"> 
        <a href="/listings-list-with-map" className="img-box">
          <div className="utf-listing-badges-item"> <span className="featured">Featured</span> </div>
          <img src="images/popular-location-07.jpg" alt="" />
          <div className="utf-cat-img-box-content visible">
            <h4>Czech Republic</h4>
            <span>9 Properties</span> 
          </div>
        </a> 
      </div>
      <div className="col-md-4 col-sm-6"> 
        <a href="/listings-list-with-map" className="img-box"> 
          <img src="images/popular-location-08.jpg" alt="" />
          <div className="utf-cat-img-box-content visible">
            <h4>Equatorial</h4>
            <span>14 Properties</span> 
          </div>
        </a> 
      </div>
      <div className="col-md-4 col-sm-6"> 
        <a href="/listings-list-with-map" className="img-box">
          <div className="utf-listing-badges-item"> <span className="featured">Featured</span> </div>
          <img src="images/popular-location-09.jpg" alt="" />
          <div className="utf-cat-img-box-content visible">
            <h4>Indonesia</h4>
            <span>24 Properties</span> 
          </div>
        </a> 
      </div>
    </div>
    {/* Row / End */}     
  </div>
  <div class="margin-top-65"></div>
</div>

            
        </Layout>
    )
}

export default AllCategories
